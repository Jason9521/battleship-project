
let playerCarrier
let playerBattleship
let playerCruiser
let playerSubmarine
let playerDestroyer


const Gameboard = (coordinates, nodeList) => {

    return {
        nodeList: nodeList,
        coordinates: coordinates,
        carrierPlaced : false,
        battleshipPlaced : false,
        cruiserPlaced : false,
        submarinePlaced : false,
        destroyerPlaced : false,

        areShipsPlaced() {
            if (this.carrierPlaced == false) {
                this.deployCarrier()
            } else if (this.battleshipPlaced == false) {
                this.deployBattleship()
            } else if (this.cruiserPlaced == false) {
                this.deployCruiser()
            } else if (this.submarinePlaced == false) {
                this.deploySubmarine()
            } else {this.deployDestroyer()}
        },

        isValidBox(box1, box2) {
            return box1 === box2 ? true : false 
        },

        deployCarrier() {
            // The following comments can be applied to all "deploy" methods

            gameMessages = document.getElementById('gameMessages')
            gameMessages.textContent = 'Place your Carrier'

            // Creates new abort instance to trigger listener removal
            controller = new AbortController()
            signal = controller

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)

                box.addEventListener('click', () => {
                    // Remove any current event listeners
                    controller.abort()

                    // Create new Ship object
                    playerCarrier = Ship('Carrier', 5)

                    // Set Ship coordinates
                    if (isXAxis) {
                        playerCarrier.coordinates = [box.id, nodeList[boxSelect + 1].id, nodeList[boxSelect + 2].id, nodeList[boxSelect + 3].id, nodeList[boxSelect + 4].id]
                    } else {
                        playerCarrier.coordinates = [box.id, nodeList[boxSelect + 10].id, nodeList[boxSelect + 20].id, nodeList[boxSelect + 30].id, nodeList[boxSelect + 40].id]
                    }

                    // Change carrierPlaced value, thus triggering next deployment method
                    playerCarrier.placeShip()
                    this.carrierPlaced = true
                    this.areShipsPlaced()

                })

                if (isXAxis) {

                    box.addEventListener('mouseover', () => {

                        box.style.backgroundColor = 'green'
                        for (let val = 1; val < 5; val++) {
                            if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + val].id.slice(0,2))) {
                                nodeList[boxSelect + val].style.backgroundColor = 'green'
                            }
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 1; val < 5; val++) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                    
                } else {

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        for (let val = 10; val < 41; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'green'
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 10; val < 41; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                }
            })             
        },
            
        deployBattleship() {

            gameMessages.textContent = 'Place your Battleship'

            controller = new AbortController()
            signal = controller

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)

                box.addEventListener('click', () => {
                    controller.abort()
                    playerBattleship = Ship('Battleship', 4)
                    if (isXAxis) {
                        playerBattleship.coordinates = [box.id, nodeList[boxSelect + 1].id, nodeList[boxSelect + 2].id, nodeList[boxSelect + 3].id]
                    } else {
                        playerBattleship.coordinates = [box.id, nodeList[boxSelect + 10].id, nodeList[boxSelect + 20].id, nodeList[boxSelect + 30].id]
                    }
                    this.battleshipPlaced = true
                    this.areShipsPlaced()
                })

                if (isXAxis) {

                    box.addEventListener('mouseover', () => {

                        box.style.backgroundColor = 'green'
                        
                        for (let val = 1; val < 4; val++) {
                            if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + val].id.slice(0,2))) {
                                nodeList[boxSelect + val].style.backgroundColor = 'green'
                            }
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 1; val < 4; val++) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                    
                } else if (isXAxis == false && box.style.backgroundColor !== 'blue'){

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        for (let val = 10; val < 31; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'green'
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 10; val < 31; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                }
            })             
            
            },
        
        deployCruiser() {
            
            gameMessages.textContent = 'Place your Cruiser'

            controller = new AbortController()
            signal = controller

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)

                box.addEventListener('click', () => {
                    controller.abort()
                    playerCruiser = Ship('Cruiser', 3)
                    if (isXAxis) {
                        playerCruiser.coordinates = [box.id, nodeList[boxSelect + 1].id, nodeList[boxSelect + 2].id]
                    } else {
                        playerCruiser.coordinates = [box.id, nodeList[boxSelect + 10].id, nodeList[boxSelect + 20].id]
                    }
                    this.cruiserPlaced = true
                    this.areShipsPlaced()
                })

                if (isXAxis) {

                    box.addEventListener('mouseover', () => {

                        box.style.backgroundColor = 'green'
                        for (let val = 1; val < 3; val++) {
                            if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + val].id.slice(0,2))){
                                nodeList[boxSelect + val].style.backgroundColor = 'green'
                            }
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 1; val < 3; val++) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                    
                } else {

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        for (let val = 10; val < 21; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'green'
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 10; val < 21; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                }
            })             
        },
            
        deploySubmarine() {

            gameMessages.textContent = 'Place your Submarine'

            controller = new AbortController()
            signal = controller

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)

                box.addEventListener('click', () => {
                    controller.abort()
                    playerSubmarine = Ship('Submarine', 3)
                    if (isXAxis) {
                        playerSubmarine.coordinates = [box.id, nodeList[boxSelect + 1].id, nodeList[boxSelect + 2].id]
                    } else {
                        playerSubmarine.coordinates = [box.id, nodeList[boxSelect + 10].id, nodeList[boxSelect + 20].id]
                    }
                    
                    this.submarinePlaced = true
                    this.areShipsPlaced()
                })

                if (isXAxis) {

                    box.addEventListener('mouseover', () => {

                        box.style.backgroundColor = 'green'
                        for (let val = 1; val < 3; val++) {
                            if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + val].id.slice(0,2))){
                                nodeList[boxSelect + val].style.backgroundColor = 'green'
                            }
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 1; val < 3; val++) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                    
                } else {

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        for (let val = 10; val < 21; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'green'
                        }
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        for (let val = 10; val < 21; val += 10) {
                            nodeList[boxSelect + val].style.backgroundColor = 'white'
                        }
                    }, signal)
                }
            })             
        },
            
        deployDestroyer() {

            gameMessages.textContent = 'Finally, place your Destroyer'

            controller = new AbortController()
            signal = controller

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)

                box.addEventListener('click', () => {
                    playerDestroyer = Ship('Destroyer', 2)
                    if (isXAxis) {
                        playerDestroyer.coordinates = [box.id, nodeList[boxSelect + 1].id]
                    } else {
                        playerDestroyer.coordinates = [box.id, nodeList[boxSelect + 10].id]
                    }
                    this.destroyerPlaced = true
                        // Activate computer-side placement
                })

                if (isXAxis) {

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    }, signal)
                    
                } else {

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                    }, signal)

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                    }, signal)
                }
            })             
           
        },
    }}