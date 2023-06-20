'use strict'

import { clearDOMMenu } from "./clearDOM";
import { Ship, Gameboard, Player, controller, } from "./factories";

// Global Variables

const playerCoordinates = ['PA1', 'PA2', 'PA3', 'PA4', 'PA5', 'PA6', 'PA7', 'PA8', 'PA9', 'PA10', 'PB1', 'PB2', 'PB3', 'PB4', 'PB5', 'PB6',  'PB7', 'PB8', 'PB9', 'PB10', 'PC1', 'PC2', 'PC3', 'PC4', 'PC5', 'PC6',  'PC7', 'PC8', 'PC9', 'PC10', 'PD1', 'PD2', 'PD3', 'PD4', 'PD5', 'PD6',  'PD7', 'PD8', 'PD9', 'PD10', 'PE1', 'PE2', 'PE3', 'PE4', 'PE5', 'PE6',  'PE7', 'PE8', 'PE9', 'PE10', 'PF1', 'PF2', 'PF3', 'PF4', 'PF5', 'PF6',  'PF7', 'PF8', 'PF9', 'PF10', 'PG1', 'PG2', 'PG3', 'PG4', 'PG5', 'PG6',  'PG7', 'PG8', 'PG9', 'PG10', 'PH1', 'PH2', 'PH3', 'PH4', 'PH5', 'PH6',  'PH7', 'PH8', 'PH9', 'PH10', 'PI1', 'PI2', 'PI3', 'PI4', 'PI5', 'PI6',  'PI7', 'PI8', 'PI9', 'PI10', 'PJ1', 'PJ2', 'PJ3', 'PJ4', 'PJ5', 'PJ6',  'PJ7', 'PJ8', 'PJ9', 'PJ10',]

const computerCoordinates = ['CA1', 'CA2', 'CA3', 'CA4', 'CA5', 'CA6', 'CA7', 'CA8', 'CA9', 'CA10', 'CB1', 'CB2', 'CB3', 'CB4', 'CB5', 'CB6',  'CB7', 'CB8', 'CB9', 'CB10', 'CC1', 'CC2', 'CC3', 'CC4', 'CC5', 'CC6',  'CC7', 'CC8', 'CC9', 'CC10', 'CD1', 'CD2', 'CD3', 'CD4', 'CD5', 'CD6',  'CD7', 'CD8', 'CD9', 'CD10', 'CE1', 'CE2', 'CE3', 'CE4', 'CE5', 'CE6',  'CE7', 'CE8', 'CE9', 'CE10', 'CF1', 'CF2', 'CF3', 'CF4', 'CF5', 'CF6',  'CF7', 'CF8', 'CF9', 'CF10', 'CG1', 'CG2', 'CG3', 'CG4', 'CG5', 'CG6',  'CG7', 'CG8', 'CG9', 'CG10', 'CH1', 'CH2', 'CH3', 'CH4', 'CH5', 'CH6',  'CH7', 'CH8', 'CH9', 'CH10', 'CI1', 'CI2', 'CI3', 'CI4', 'CI5', 'CI6',  'CI7', 'CI8', 'CI9', 'CI10', 'CJ1', 'CJ2', 'CJ3', 'CJ4', 'CJ5', 'CJ6',  'CJ7', 'CJ8', 'CJ9', 'CJ10',]

let playerGameboard

let nameValue = ''
let isXAxis = true

// Main Menu

function loadMain() {

    const titleMain = document.createElement('div');
        titleMain.classList.add('title-main', 'text-fade');
        titleMain.setAttribute('id', 'titleMain');
        document.body.appendChild(titleMain);

        const titleMainH1 = document.createElement('h1');
            titleMainH1.textContent = 'Sea Warfare';
            titleMain.appendChild(titleMainH1);


    const optionsMain = document.createElement('div');
        optionsMain.classList.add('menu-options', 'fade-in');
        optionsMain.setAttribute('id', 'optionsMain');
        document.body.appendChild(optionsMain);

        const newGameBtn = document.createElement('button');
        const rulesBtn = document.createElement('button');

        newGameBtn.textContent = 'New Game';
        rulesBtn.textContent = 'Rules';

        newGameBtn.setAttribute('id', 'newGameBtn');
        rulesBtn.setAttribute('id', 'rulesBtn');
        
        optionsMain.appendChild(newGameBtn);
        optionsMain.appendChild(rulesBtn);

    const rulesModal = document.createElement('dialog');
    rulesModal.classList.add('rules-modal');
    rulesModal.setAttribute('id', 'rulesModal');
    document.body.appendChild(rulesModal);
    
        const rulesModalClose = document.createElement('i');
        rulesModalClose.classList.add('fa-sharp', 'fa-solid' ,'fa-circle-xmark', 'fa-xl');
        rulesModal.appendChild(rulesModalClose);
    
        const ruleModalTxt = document.createElement('p');
        ruleModalTxt.textContent = "Welcome to Sea Warfare, Captain! Your duty is to destroy the enemy fleet before they destroy ours. Left-click anywhere on the enemy's gameboard to fire a shot off into their waters. If we sink their ships first, we win! Good luck, Captain."
        rulesModal.appendChild(ruleModalTxt);


    const newGameModal = document.createElement('dialog');
    newGameModal.classList.add('new-game-modal');
    newGameModal.setAttribute('id', 'newGameModal');
    document.body.appendChild(newGameModal);

        const ngModalClose = document.createElement('i');
        ngModalClose.classList.add('fa-sharp', 'fa-solid' ,'fa-circle-xmark', 'fa-xl');
        newGameModal.appendChild(ngModalClose);

        const ngModalH3 = document.createElement('h3');
        ngModalH3.textContent = 'Enter Your Name';
        newGameModal.appendChild(ngModalH3);

        const ngModalTextBox = document.createElement('input');
        ngModalTextBox.setAttribute('id', 'ngModalTextBox')
        ngModalTextBox.setAttribute('type', 'text');
        ngModalTextBox.setAttribute('maxlength', 16);
        newGameModal.appendChild(ngModalTextBox);

        const ngModalSubmit = document.createElement('button');
        ngModalSubmit.textContent = 'Start Game';
        ngModalSubmit.setAttribute('id', 'ngModalSubmit')
        newGameModal.appendChild(ngModalSubmit)

    // Event Listeners

    newGameBtn.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        newGameModal.showModal()
    })

    ngModalClose.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        newGameModal.close()
    })

    rulesBtn.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        rulesModal.showModal()  
    })

    rulesModalClose.addEventListener('click' , () => {
        newGameBtn.classList.toggle('hide-button')
        rulesBtn.classList.toggle('hide-button')
        rulesModal.close()
    })

    ngModalSubmit.addEventListener('click' , () => {
        nameValue = ngModalTextBox.value;
        newGameModal.classList.add('modal-fade-out')
        clearDOMMenu()
        loadGameBoard()
        setTimeout(() => {
            (newGameModal.close())
        }, 2500)

        const playerBoardNodes = document.getElementById('playerBoard').childNodes
        const comBoardNodes = document.getElementById('computerBoard').childNodes

        playerGameboard = Gameboard(playerCoordinates, playerBoardNodes)
        playerGameboard.areShipsPlaced()
        // deployFleet()
    })
}

function loadGameBoard() {

    const gameMessages = document.createElement('p');
    gameMessages.classList.add('game-messages', 'gb-fade-in');
    gameMessages.setAttribute('id', 'gameMessages');
    // gameMessages.textContent = `It is ${nameValue}'s turn.`
    document.body.appendChild(gameMessages)

    const axisToggle = document.createElement('button');
    if (isXAxis) {
        axisToggle.textContent = 'Toggle Y-Axis'
    } else {
        axisToggle.textContent = 'Toggle X-Axis'
    }
        
    axisToggle.classList.add('axis-toggle', 'gb-fade-in')
    axisToggle.setAttribute('id', 'axisToggle')
    document.body.appendChild(axisToggle)

    axisToggle.addEventListener('click', () => {
        controller.abort()
        if (isXAxis) {
            isXAxis = false
            axisToggle.textContent = 'Toggle X-Axis'
            playerGameboard.areShipsPlaced()

        } else {
            isXAxis = true
            axisToggle.textContent = 'Toggle Y-Axis'
            playerGameboard.areShipsPlaced()
        }
    })


    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard-container', 'gb-fade-in')
    gameboardContainer.setAttribute('id', 'gameboardContainer');
    document.body.appendChild(gameboardContainer);

        const playerSection = document.createElement('div');
        playerSection.classList.add('player-section')
        gameboardContainer.appendChild(playerSection);

            const playerName = document.createElement('h2')
            playerName.setAttribute('id', 'playerName')
            playerName.textContent = `${nameValue}'s Fleet`
            playerSection.appendChild(playerName);

            const playerBoard = document.createElement('div')
            playerBoard.classList.add('player-board')
            playerBoard.setAttribute('id', 'playerBoard');
            playerSection.appendChild(playerBoard)


        const computerSection = document.createElement('div')
        computerSection.classList.add('computer-section')
        gameboardContainer.appendChild(computerSection);


            const computerName = document.createElement('h2')
            computerName.setAttribute('id', 'computerName')
            computerName.textContent = "Computer's Fleet"
            computerSection.appendChild(computerName);

            const computerBoard = document.createElement('div')
            computerBoard.classList.add('computer-board')
            computerBoard.setAttribute('id', 'computerBoard');
            computerSection.appendChild(computerBoard)



    // Generate gameboards

    for (let i = 1; i < 101; i++) {
            const gameboardBox = document.createElement('div');
            gameboardBox.classList.add('player-gb-box');
            gameboardBox.setAttribute('id', playerCoordinates[i - 1])
            playerBoard.appendChild(gameboardBox)
        }
            

    for (let i = 1; i < 101; i++) {
        const gameboardBox = document.createElement('div');
        gameboardBox.classList.add('com-gb-box');
        gameboardBox.setAttribute('id', computerCoordinates[i - 1])
        computerBoard.appendChild(gameboardBox)
    }
}

function deployFleet() {
    
}



// const playerBattleship = Ship('Battleship', 4);
// const playerCruiser = Ship('Cruiser', 3);
// const playerSub = Ship('Submarine', 3);
// const playerDestroyer = Ship('Destroyer', 2);


export { loadMain, loadGameBoard , playerCoordinates, computerCoordinates, isXAxis}




