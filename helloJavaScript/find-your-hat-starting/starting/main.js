const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = ' ';
const fieldCharacter = '░';
const pathCharacter = '+';

class Field {
        //tạo các thuộc tính cho class Field trong cosntructor
        constructor(rawField) {
                this.field = rawField;
                this.pathH = 0;
                this.pathV = 0;
                this.field[0][0] = pathCharacter;
                this.findCorrectWay = true;
        }
        //Tạo static method trả về giá trị rawField là một Nested aray
        //Dùng biến này tạo các Instance của class Field
        static createRawField (row, column, prob) {
                let rawField = [];                
                for (let i=0; i<row; i++) {
                        rawField[i] = [];
                        for (let j=0; j<column; j++) {
                                rawField[i].push(fieldCharacter)
                        }
                }
                //Tạo vị trí random cho Hat ở góc 1/4 bên phải phía dưới
                let HatX = Math.floor(Math.random()*(column - column/2) + column/2) - 1;
                let HatY = Math.floor(Math.random()*(row - row/2) + row/2);
                rawField[HatY][HatX] = hat;
                //Tạo vị trí random cho Hole - số lượng Holes thõa mãn điều kiện trong while
                let numOfHoles = 0;                
                while (prob > numOfHoles/(row*column)) {
                        let HoleX = Math.floor(Math.random()*(column - 1));
                        let HoleY = Math.floor(Math.random()*(row - 1));
                        if(rawField[HoleY][HoleX] === fieldCharacter){
                                rawField[HoleY][HoleX] = hole
                                numOfHoles++;
                        }                       
                }             
                //Trả về giá trị cuối cùng của method 
                console.log(numOfHoles)
                return rawField
        }
        print () {
                //Cách 1 - Tạo array displayString bằng cách join 2 lần
                // - join từng hàng - sau đó join các hàng lại dùng regex \n để xuống từng hàng
                const displayString = this.field.map((row) => {
                        return row.join('');
                }).join("\n");
                //Cách 2
                console.log(displayString);
                for (let i = 0; i < this.field.length; i++) {
                        console.log(this.field[i].join(''))
                }
                //cách 3 để in - join từng hàng và in chúng
                for (let x of this.field) {
                        console.log(x.join(''))
                }
        }
        checkHat(){
                return this.field[this.pathV][this.pathH] === hat
        }
        checkHole(){
                return this.field[this.pathV][this.pathH] === hole
        }
        moveThePath(){                
                let input = prompt(`which way: `);                        
                switch(input) {
                        case 'd':                                
                                if (this.pathH < this.field[0].length -1) {
                                        this.pathH++;
                                        if (this.field[this.pathV][this.pathH] === fieldCharacter ){
                                                this.field[this.pathV][this.pathH] = pathCharacter
                                                this.field[this.pathV][this.pathH - 1] = fieldCharacter
                                        }else if (this.checkHat())  {
                                                console.log('Get the Hat');
                                                this.findCorrectWay = false;
                                                break;
                                        }else if (this.checkHole())  {
                                                console.log('Fall in the Hole');
                                                this.findCorrectWay = false;
                                                break;
                                        } else {
                                                console.log('OUT')
                                                this.findCorrectWay = false;
                                                break;
                                        }
                                }else {
                                        console.log('OUT');
                                        this.findCorrectWay = false;
                                        break;
                                }                                
                        break;
                        case 'a':
                                if (this.pathH > 0) {
                                        this.pathH--;
                                        if (this.field[this.pathV][this.pathH] === fieldCharacter ){
                                                this.field[this.pathV][this.pathH] = pathCharacter
                                                this.field[this.pathV][this.pathH + 1] = fieldCharacter
                                        }else if (this.checkHat())  {
                                                console.log('Get the Hat');
                                                this.findCorrectWay = false;
                                                break;
                                        }else if (this.checkHole())  {
                                                console.log('Fall in the Hole');
                                                this.findCorrectWay = false;
                                                break;
                                        } else {
                                                console.log('OUT')
                                                this.findCorrectWay = false;
                                                break;
                                        }
                                }else {
                                        console.log('OUT');
                                        this.findCorrectWay = false;
                                        break;
                                } 
                        break;
                        case 's':
                                if (this.pathV < this.field.length - 1) {
                                        this.pathV++;
                                        if (this.field[this.pathV][this.pathH] === fieldCharacter ){
                                                this.field[this.pathV][this.pathH] = pathCharacter
                                                this.field[this.pathV - 1][this.pathH] = fieldCharacter
                                        } else if (this.checkHat())  {
                                                console.log('Get the Hat');
                                                this.findCorrectWay = false;
                                                break;
                                        } else if (this.checkHole())  {
                                                console.log('Fall in the Hole');
                                                this.findCorrectWay = false;
                                                break;
                                        } else {
                                                console.log('OUT')
                                                this.findCorrectWay = false;
                                                break;
                                        }
                                }else {
                                        console.log('OUT');
                                        this.findCorrectWay = false;
                                        break;
                                }
                        break;
                        case 'w':
                                if (this.pathV > 0) {
                                        this.pathV--;
                                        if (this.field[this.pathV][this.pathH] === fieldCharacter ){
                                                this.field[this.pathV][this.pathH] = pathCharacter
                                                this.field[this.pathV + 1][this.pathH] = fieldCharacter
                                        } else if (this.checkHat())  {
                                                console.log('Get the Hat');
                                                this.findCorrectWay = false;
                                                break;
                                        } else if (this.checkHole())  {
                                                console.log('Fall in the Hole');
                                                this.findCorrectWay = false;
                                                break;
                                        } else {
                                                console.log('OUT')
                                                this.findCorrectWay = false;
                                                break;
                                        }
                                }else {
                                        console.log('OUT');
                                        this.findCorrectWay = false;
                                        break;
                                } 
                        break;       
                        case 'q': this.findCorrectWay = false;
                        break;
                        default : 
                        console.log('use w to up, s to down, a to left, d to rigth, q to quit')
                        this.moveThePath();
                        break;
                }
        }
        runGame () {
                while (this.findCorrectWay) {
                        console.clear()
                        this.print()
                        this.moveThePath();
                }                
        }
}
const Map = new Field(Field.createRawField(3,6,0.1));
Map.runGame()




































/* - Lần 1 - 
class Field {
        constructor(field = [[]]) {
                this.field = field;
                this.locationX = 0;
                this.locationY = 0;
                this.field[this.locationX][this.locationY] = pathCharacter
        }
        //Static method này dùng tạo 1 Bản đồ, bản đồ này là biến trong lệnh tạo Instance của class Field.
        //Cách tạo: let newMap = Field.createField (row, column, prob)
        //Sau đó tạo instance của Field là Map1 như sau:
        //const Map = new Field(newMap)
        static createField (row, column, prob) {
                let NewField = [[]]
                for (let i=0; i<row; i++) {
                        NewField[i]=[]
                        for (let j=0; j<column; j++) {
                                NewField[i].push(fieldCharacter)                         
                        }                  
                }
                for (let i=0; i<row; i++) {
                        for (let j=0; j<column; j++) {
                                if (Math.random() > prob) {
                                        NewField[i][j] = fieldCharacter
                                } else {
                                        NewField[i][j] = hole
                                }                       
                        }
                }
                let Hatx = Math.floor(Math.random()*(column-1));
                let Haty = Math.floor(Math.random()*(row-1));
                NewField[Haty][Hatx] = hat
                //field[0][0] = pathCharacter            
                return NewField;
        }
        print () {
                //for (let x of this.field) {x = x.join('')console.log(x)}
                console.log('use w to up, s to down, a to left, d to rigth')
                this.field.forEach(element => {
                        console.log(element.join(''))
                    });
        }
        play() {                
                console.clear()
                console.log(`locationX: ${this.field.locationX}, locationY: ${this.field.locationY}`)        
                this.print()
                let foundCorrectWay = true;
                while (foundCorrectWay) {
                        // Get user input
                        let move = prompt('Where to go:')
                        // Compare the guess (move) to the right path and let the user know.      
                        switch (move) {
                                case 'd': 
                                        if (this.locationX < Map.field[Map.locationY].length - 1){
                                                Map.locationX++;
                                                if (Map.field[Map.locationY][Map.locationX] === fieldCharacter){
                                                        Map.field[Map.locationY][Map.locationX] = pathCharacter;
                                                        Map.field[Map.locationY][Map.locationX - 1] = hole;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hole) {
                                                        return console.log('You dropped into the Hole')
                                                        return foundCorrectWay = false;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hat) {
                                                        return console.log('Congrat winner, you found the Hat')
                                                        foundCorrectWay = false;
                                                }
                                                console.clear()
                                                console.log(`locationX: ${Map.locationX}, locationY: ${Map.locationY}`)        
                                                Map.print()                                        
                                                break;
                                        } else {
                                                return console.log('You go out of bound')  
                                        }
                                case 'a': 
                                        if (Map.locationX > 0){
                                                Map.locationX--;
                                                if (Map.field[Map.locationY][Map.locationX] === fieldCharacter){
                                                        Map.field[Map.locationY][Map.locationX + 1] = hole;
                                                        Map.field[Map.locationY][Map.locationX] = pathCharacter;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hole) {
                                                        return console.log('You dropped into the Hole')
                                                        return foundCorrectWay = false;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hat) {
                                                        return console.log('Congrat winner, you found the Hat')
                                                        foundCorrectWay = false;
                                                }
                                                console.clear()
                                                console.log(`locationX: ${Map.locationX}, locationY: ${Map.locationY}`)        
                                                Map.print()
                                                break;
                                        } else {
                                                return console.log('You go out of bound')  
                                        }                        
                                case 's':
                                        if (Map.locationY < Map.field.length - 1){
                                                Map.locationY++;
                                                if (Map.field[Map.locationY][Map.locationX] === fieldCharacter){
                                                        Map.field[Map.locationY - 1][Map.locationX] = hole;
                                                        Map.field[Map.locationY][Map.locationX] = pathCharacter
                                                } else if (Map.field[Map.locationY][Map.locationX] === hole) {
                                                        return console.log('You dropped into the Hole')
                                                        return foundCorrectWay = false;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hat) {
                                                        return console.log('Congrat winner, you found the Hat')
                                                        foundCorrectWay = false;
                                                }
                                                console.clear()
                                                console.log(`locationX: ${Map.locationX}, locationY: ${Map.locationY}`)        
                                                Map.print()
                                                break;
                                        } else {
                                                return console.log('You go out of bound')  
                                        }
                                case 'w':
                                        if (Map.locationY > 0){
                                                Map.locationY--;
                                                if (Map.field[Map.locationY][Map.locationX] === fieldCharacter){
                                                        Map.field[Map.locationY + 1][Map.locationX] = hole;
                                                        Map.field[Map.locationY][Map.locationX] = pathCharacter;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hole) {
                                                        return console.log('You dropped into the Hole')
                                                        return foundCorrectWay = false;
                                                } else if (Map.field[Map.locationY][Map.locationX] === hat) {
                                                        return console.log('Congrat winner, you found the Hat')
                                                        foundCorrectWay = false;
                                                }
                                                console.clear()
                                                console.log(`locationX: ${Map.locationX}, locationY: ${Map.locationY}`)        
                                                Map.print()
                                                break;
                                        } else {
                                                return console.log('You go out of bound')  
                                        }
                                case 'q':
                                        return foundCorrectWay = false;
                                default : 
                                console.log('use w to up, s to down, a to left, d to rigth, q to quit')
                        }
                }
                return this.field.print()
        }
}
// Chọn hàng, cột, tỉ lệ ra Hole và chơi
const Map = new Field(Field.createField(5,15,0.15))
Map.play()
 - lần 1 - */