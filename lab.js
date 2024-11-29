function calculateCentroid(vertices) {
    let xSum = 0;
    let ySum = 0;
    const numVertices = vertices.length;

    for (const vertex of vertices) {
        xSum += vertex.x;
        ySum += vertex.y;
    }

    const centroid = {
        x: xSum / numVertices,
        y: ySum / numVertices
    };

    return centroid;
}

// Example usage:
const polygonVertices = [{x: 0, y: 0}, {x: 4, y: 0}, {x: 4, y: 3}, {x: 0, y: 3}];
const centroid = calculateCentroid(polygonVertices);
console.log(`The centroid is at (${centroid.x}, ${centroid.y})`);
