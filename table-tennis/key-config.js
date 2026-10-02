const callbacksFromKey = new Map();

const handleKeyPress = (event) => {
    const callbacks = callbacksFromKey.get(event.key);

    if (!callbacks) return;

    callbacks.forEach((callback) => callback(event));
};

document.addEventListener("keydown", handleKeyPress);

export const addKeyPressCallback = (key, callback) => {
    if (!callbacksFromKey.has(key)) {
        callbacksFromKey.set(key, []);
    }

    callbacksFromKey.get(key).push(callback);
};