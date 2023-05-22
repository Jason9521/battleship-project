function createShip(shipName, shipLength) {
    return {
        shipName : shipName,
        shipLength: shipLength,
        hitCount: 0,
        isSunk() {
            return (this.hitCount == shipLength ? true : false)
        },
        hit() {
            this.hitCount += 1
        }
    }
};

let titanic = createShip('Titanic', 5);
let ssAnne = createShip('SS Anne', 3);

export {createShip}
