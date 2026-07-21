import { BackSide, BoxGeometry, DoubleSide, Mesh, MeshPhongMaterial, PlaneGeometry, SphereGeometry } from "three";

/**
 * 
 * @param {Mesh} actor 
 * @param {*} dimensions 
 * @returns 
 */
export function createExtendedReferents(actor, dimensions) {
    const depth = dimensions.depth ? dimensions.depth : dimensions.radius * 2;
    const width = dimensions.width ? dimensions.width : dimensions.radius * 2;


    const material = new MeshPhongMaterial();
    material.transparent = true;
    material.opacity = .4;
    // const geometry1 = new BoxGeometry(.01, 3., asset.dimensions.depth);
    const geometry1 = new PlaneGeometry(depth, 4);
    geometry1.rotateY(-Math.PI / 2);

    // const geometry2 = new BoxGeometry(width, 3., .01);
    const geometry2 = new PlaneGeometry(width, 4);
    // geometry1.rotateY(Math.PI/2);

    const pannels = [];

    const visPannel1 = new Mesh(geometry1, material);
    visPannel1.position.set(width / 2, 0., 0.);
    visPannel1.name = "Border Extension 1";
    pannels.push(visPannel1);

    const visPannel2 = new Mesh(geometry1, material.clone());
    visPannel2.position.set(-width / 2, 0., 0.);
    visPannel2.rotateY(Math.PI);
    visPannel2.name = "Border Extension 2";
    pannels.push(visPannel2);


    const visPannel3 = new Mesh(geometry2, material.clone());
    visPannel3.position.set(0., 0., depth / 2);
    visPannel3.rotateY(Math.PI);
    visPannel3.name = "Border Extension 3";
    pannels.push(visPannel3);


    const visPannel4 = new Mesh(geometry2, material.clone());
    visPannel4.position.set(0., 0., -depth / 2);
    visPannel4.name = "Border Extension 4";
    pannels.push(visPannel4);


    const visPannel5 = new Mesh(geometry2, material.clone());
    visPannel5.material.side = DoubleSide;
    visPannel5.position.set(0., 0., 0);
    visPannel5.name = "Half X";
    pannels.push(visPannel5);

    const labelPlane = new Mesh(geometry2, material.clone());
    labelPlane.material.side = DoubleSide;
    labelPlane.position.set(0., 0., 0);
    labelPlane.name = "Label Plane";
    pannels.push(labelPlane);

    const visPannel6 = new Mesh(geometry1, material.clone());
    visPannel6.material.side = DoubleSide;
    visPannel6.position.set(0., 0., 0);
    visPannel6.name = "Half Z";
    pannels.push(visPannel6);

    const enclosing = new Mesh(createEnglobingShape(dimensions, 1.), material.clone());
    enclosing.position.set(0, 0, 0);
    actor.getWorldPosition(enclosing.position);
    enclosing.position.multiplyScalar(-1);
    enclosing.name = "Enclosing";
    pannels.push(enclosing);

    const enclosing2 = new Mesh(createEnglobingShape(dimensions, 1.), material.clone());
    enclosing2.position.set(0, 0, 0);
    actor.getWorldPosition(enclosing2.position);
    enclosing2.position.multiplyScalar(-1);
    enclosing2.material.side = BackSide;
    enclosing2.name = "Enclosing Back Face Cull";
    pannels.push(enclosing2);

    const proxy = new Mesh(actor.geometry.clone(), actor.material.clone());
    proxy.position.set(2, 0, 2);
    actor.getWorldQuaternion(proxy.rotation);
    proxy.name = "Proxy";
    pannels.push(proxy);
    proxy.userData.dimensions = dimensions;

    return pannels;
}


function makeBoxAtlasUVs(geometry) {

    const uv = geometry.attributes.uv;

    const cols = 4;
    const rows = 3;

    const w = 1 / cols;
    const h = 1 / rows;

    // atlas cell for each face in BoxGeometry order:
    // +X, -X, +Y, -Y, +Z, -Z
    const cells = [
        [2, 1], // +X -> right
        [0, 1], // -X -> left
        [1, 2], // +Y -> top
        [1, 0], // -Y -> bottom
        [1, 1], // +Z -> front
        [3, 1], // -Z -> back
    ];

    for (let face = 0; face < 6; face++) {

        const [cx, cy] = cells[face];

        const u0 = cx * w;
        const v0 = cy * h;
        const u1 = u0 + w;
        const v1 = v0 + h;

        const base = face * 4;

        // Same vertex order as BoxGeometry
        uv.setXY(base + 0, u0, v1);
        uv.setXY(base + 1, u1, v1);
        uv.setXY(base + 2, u0, v0);
        uv.setXY(base + 3, u1, v0);
    }

    uv.needsUpdate = true;
}

export function createEnglobingShape(dimensions, delta) {
    let geometry;
    if (dimensions.radius) {
        geometry = new SphereGeometry(dimensions.radius + delta);
    }
    else {
        geometry = new BoxGeometry(dimensions.width + delta, dimensions.height + delta, dimensions.depth + delta);
        makeBoxAtlasUVs(geometry);
    }

    return geometry;
}