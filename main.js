const gameContainer = document.querySelector('.game-container');
const addButton = document.querySelector('.add-button');
const startButton = document.querySelector('.start-button');

let roadContainer;
let carContainer;
let carInstance = [];
let id = 1;
let color = ['yellow', 'blue', 'cyan', 'purple', 'orange', 'green', 'brown'];

let posX = 20;


class Car{
    constructor(color, id) {
        this.color = color;
        this.id = id;

        this.createCar();
    }

    setColor(color){
        carContainer.style.backgroundColor = color;
    }

    createCar(){
        roadContainer = document.createElement('div');
        carContainer = document.createElement('div');

        roadContainer.classList.add('road');

        carContainer.classList.add('car');

        carContainer.style.backgroundColor = this.color;
        carContainer.id = this.id;
        carContainer.innerText = `#${this.id}`;

        gameContainer.append(roadContainer);
        roadContainer.append(carContainer);
    }

    movement(){
        let element = document.getElementById(`${this.id}`);
        let current_margin = 1;

        setInterval(function(){
            if(window.innerWidth<=current_margin+100){
                current_margin = 1;
            }
            let new_margin = parseInt(current_margin)+1;
            current_margin = new_margin;
            element.style.marginLeft = new_margin;
        },getRandomNumber(15));
    }

}

addButton.addEventListener('click', function (){
    carInstance.push(new Car(color[getRandomNumber(color.length)], id));
    id++;
});

startButton.addEventListener('click', function (){
    for (let item of carInstance){
        item.movement();
    }
});

function getRandomNumber(colorCollectionLength) {
    return Math.floor(Math.random() * colorCollectionLength);
}

