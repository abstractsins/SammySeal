// List of nicknames
const nicknames = {
    nickname1: '{ sammySeal }',
    nickname2: '{ smokinSammySeal }',
    nickname3: '{ originalSamSeal }',
    nickname4: '{ samuelSealwell }',
};

const nicknamesArray = Object.values(nicknames);
        // CONSOLE TESTING
    console.log('Names to choose from: ' + nicknamesArray)

// Nickname randomizer
let i = Math.floor(Math.random() * nicknamesArray.length);
const randomNickname = nicknamesArray[i];
        // CONSOLE TESTING
    console.log('Random nickname: ' + randomNickname);





let nicknameDisplay = document.getElementById('nickname');
nicknameDisplay.innerHTML = randomNickname;
        // CONSOLE TESTING
    console.log('Name currently displayed: ' + nicknameDisplay.innerHTML);

