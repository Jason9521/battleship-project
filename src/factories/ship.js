const Ship = (shipName, shipLength) => {
    return {
        shipName : shipName,
        shipLength: shipLength,
        hitCount: 0,
        coordinates: [],
        isSunk() {
            return (this.hitCount == shipLength ? true : false)
        },

        hit() {
            this.hitCount += 1
        },

        placeShip() {
            this.coordinates.forEach(coordinate => {
                document.getElementById(coordinate).style.backgroundColor = 'blue'
            })
        },
    }
};