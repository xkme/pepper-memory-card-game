// Generate random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function onLoad() {
    let valuesArray = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

    const positionsValue = new Map();

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let key = i.toString() + j.toString();

            var randomNumber = getRandomInt(8);
            var index = valuesArray.indexOf(randomNumber);

            while (index < 0) {
                randomNumber = getRandomInt(8);
                index = valuesArray.indexOf(randomNumber);
            }

            positionsValue[i][j] = randomNumber;
            valuesArray.splice(index, 1);
        }
    }

    //document.getElementById("img00").src = "card_front.png";

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let key = i.toString() + j.toString();
            let searchId = "imgBack" + key;
            let imageNumberString = positionsValue[i][j];
            //let rand = getRandomInt(8);
            document.getElementById(searchId).src = "./" + imageNumberString + ".png";
            console.log("Random number generated is: ", imageNumberString);
        }
    }
}

//onLoad();

//document.getElementById("imgBack01").src = "./1.png";
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let key = i.toString() + j.toString();
        let searchId = "imgBack" + key;
        imageNumberString = getRandomInt(8);
        document.getElementById(searchId).src = "./" + imageNumberString + ".png";
    }
}

// Function for adding 
function OnCardSelect(number) {
    console.log(number);

    var idFront = "card-front-" + number;
    var idBack = "card-back-" + number;

    document.getElementById(idFront).className += " card-front-clicked";
    document.getElementById(idBack).className += " card-back-clicked";
}

const positionsValue = new Map();
