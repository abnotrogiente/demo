export class VisualizationRegistry {
    constructor(relationshipsFromActor) {
        this.relationshipsFromActor = relationshipsFromActor;
        this.authored = new Set();
        this.removed = new Set();
    }

    hasChanges(relationship) {
        return Object.values(relationship.params).some(param => param.value !== param.default);
    }

    isSuppressed(relationship) {
        if (this.removed.has(relationship) && this.hasChanges(relationship)) {
            this.removed.delete(relationship);
        }
        return this.removed.has(relationship);
    }

    isManuallyControlled(relationship) {
        return this.authored.has(relationship) || this.isSuppressed(relationship);
    }

    add(relationship) {
        this.removed.delete(relationship);
        this.authored.add(relationship);
    }

    remove(relationship) {
        for (const param of Object.values(relationship.params)) param.value = param.default;
        this.authored.delete(relationship);
        this.removed.add(relationship);
    }

    list() {
        const relationships = new Set();
        for (const actors of this.relationshipsFromActor.values()) {
            for (const types of actors.values()) {
                for (const relationship of types.values()) {
                    if (!this.isSuppressed(relationship) &&
                        (this.authored.has(relationship) || this.hasChanges(relationship))) {
                        relationships.add(relationship);
                    }
                }
            }
        }
        return [...relationships];
    }
}
