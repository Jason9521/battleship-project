'use strict'

import { playerCoordinates, computerCoordinates } from "./interface";

const Ship = (shipName, shipLength) => {
    return {
        shipName : shipName,
        shipLength: shipLength,
        hitCount: 0,
        coordinates: [],
        isPlaced: false,
        isSunk() {
            return (this.hitCount == shipLength ? true : false)
        },
        hit() {
            this.hitCount += 1
        },
        placeShip() {

            this.isPlaced = true
        }
    }
};

const Gameboard = (coordinates, nodeList) => {
    return {
        isXAxis: true,

        isYAxis: false,

        isValidBox(box1, box2) {
            return box1 === box2 ? true : false 
        },

        deployCarrierXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                        nodeList[boxSelect + 30].style.backgroundColor = 'green'
                        nodeList[boxSelect + 40].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                        nodeList[boxSelect + 30].style.backgroundColor = 'white'
                        nodeList[boxSelect + 40].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployCarrierYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'
                    // Get two id's and see if they match [ex. PB and PB = match, PC and PD = no match]
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 3].id.slice(0,2))){
                        nodeList[boxSelect + 3].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 4].id.slice(0,2))){
                        nodeList[boxSelect + 4].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                    nodeList[boxSelect + 3].style.backgroundColor = 'white'
                    nodeList[boxSelect + 4].style.backgroundColor = 'white'
                })
            })
        },

        deployBattleshipXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                        nodeList[boxSelect + 30].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                        nodeList[boxSelect + 30].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployBattleshipYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 3].id.slice(0,2))){
                        nodeList[boxSelect + 3].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                    nodeList[boxSelect + 3].style.backgroundColor = 'white'
                })
            })
        },

        deployCruiserXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployCruiserYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                })
            })
        },

        deploySubXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                        nodeList[boxSelect + 20].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                        nodeList[boxSelect + 20].style.backgroundColor = 'white'
                    })
                })
            },
            
        deploySubYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 2].id.slice(0,2))){
                        nodeList[boxSelect + 2].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                    nodeList[boxSelect + 2].style.backgroundColor = 'white'
                })
            })
        },

        deployDestroyerXAxis() {
                
                nodeList.forEach(box => {
                    let boxSelect = coordinates.indexOf(box.id)

                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'green'
                        nodeList[boxSelect + 10].style.backgroundColor = 'green'
                    })

                    box.addEventListener('mouseleave', () => {
                        box.style.backgroundColor = 'white'
                        nodeList[boxSelect + 10].style.backgroundColor = 'white'
                    })
                })
            },
            
        deployDestroyerYAxis() {

            nodeList.forEach(box => {
                let boxSelect = coordinates.indexOf(box.id)
                
                box.addEventListener('mouseover', () => {

                    box.style.backgroundColor = 'green'

                    if (this.isValidBox(box.id.slice(0,2), nodeList[boxSelect + 1].id.slice(0,2))){
                        nodeList[boxSelect + 1].style.backgroundColor = 'green'
                    }
                })

                box.addEventListener('mouseleave', () => {
                    box.style.backgroundColor = 'white'
                    nodeList[boxSelect + 1].style.backgroundColor = 'white'
                })
            })
        },

        }
    }





export {Ship, Gameboard}
