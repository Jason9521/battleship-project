'use strict'

// Main Menu

function loadMain() {

    const titleMain = document.createElement('div');
        titleMain.classList.add('title-main', 'text-fade');
        document.body.appendChild(titleMain);

    const titleMainH1 = document.createElement('h1');
        titleMainH1.textContent = 'Sea Warfare';
        titleMain.appendChild(titleMainH1);


    const optionsMain = document.createElement('div');
        optionsMain.classList.add('menu-options', 'button-fade');
        document.body.appendChild(optionsMain);

        const newGameBtn = document.createElement('button');
        const controlsBtn = document.createElement('button');
        const rulesBtn = document.createElement('button');

        newGameBtn.textContent = 'New Game';
        controlsBtn.textContent = 'Controls';
        rulesBtn.textContent = 'Rules';

        newGameBtn.setAttribute('id', 'newGameBtn');
        controlsBtn.setAttribute('id', 'controlsBtn');
        rulesBtn.setAttribute('id', 'rulesBtn');

        optionsMain.appendChild(newGameBtn);
        optionsMain.appendChild(controlsBtn);
        optionsMain.appendChild(rulesBtn);
}

const controlsModal = document.createElement('dialog');
    controlsModal.textContent = 'I am a modal'
    controlsModal.setAttribute('id', 'controlsModal')
    document.body.appendChild(controlsModal)

export { loadMain }





