'use strict'

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
        optionsMain.classList.add('menu-options', 'button-fade');
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
        ngModalTextBox.setAttribute('type', 'text');
        ngModalTextBox.setAttribute('minlength', 4);
        ngModalTextBox.setAttribute('maxlength', 16);
        newGameModal.appendChild(ngModalTextBox);

        const ngModalSubmit = document.createElement('button');
        ngModalSubmit.textContent = 'Start Game'
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

}


export { loadMain }




