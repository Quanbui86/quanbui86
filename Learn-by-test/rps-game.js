//Tạo hàm để chuyển in put của người chơi thành chữ thường và kiểm tra kết quả để trả về giá trị cuối cùng của người chơi.
const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
                return userInput;
        }       return 'Error!';
}
//tạo một số ngẫu nhiên từ 0-2 là số nguyên gán tên là randomNumber
let randomNumber = Math.floor(Math.random() *3);
//Lập hàm trả về giá trị của máy tính ('rock', 'paper' hoặc 'scissors') dựa vào biến randomNumber (có giá trị từ 0 - 2)
const getComputerChoice = () => {
        switch(randomNumber) {
                case 0:
                        return 'rock';
                        break;
                case 1:
                        return 'paper';
                        break;
                case 2:
                        return 'scissors';
                        break;
        }
}
//Tạo 2 biến chưa gán giá trị là userChoice và computerChoice;

//Tạo hàm determineWinner để trả về kết quả của trò chơi dựa vào 2 biến của nó (vẫn chưa có giá trị)
const determineWinner = (userInput2) => {
        let userChoice;
        let computerChoice;
        userChoice = getUserChoice(userInput2);    // Biến này lấy theo hàm        getUserChoice  
        computerChoice = getComputerChoice();
        if (userChoice === computerChoice) {
                return 'The game is a tie!';
        }
        if (userChoice === 'rock'){
                if (computerChoice === 'paper') {
                        return 'Computer win';
                }       return "User win";
        }
        if (userChoice === 'paper'){
                if (computerChoice === 'scissors') {
                        return 'Computer win';
                }       return "User win";
        }       
        if (userChoice === 'scissors'){
                if (computerChoice === 'rock') {
                        return 'Computer win';
                }       return "User win";
        }
        if (userChoice === 'bomb') {
                return "User win for sure :))"
        } 
}
//Đoạn này hàm determineWinner chưa có kết quả vì 2 biến chưa có giá trị.
//Tạo hàm playing để chạy kết quả trò chơi, gán giá trị cho 1 biến (userInput) của hàm determineWinner() va ham getUserChoice()
const playing = (userInput3) => { 
        let userChoice;
        let computerChoice;              
        userChoice = getUserChoice(userInput3);    // Biến này lấy theo hàm        getUserChoice  
        computerChoice = getComputerChoice();   // Biến này lấy theo hàm        getComputerChoice()
        console.log(`Hi!`);
        console.log(`User choice: ${userChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);
        console.log(determineWinner(userInput3)); //Hàm này sẽ trả về kết quả trò chơi vì 2 biến đã có giá trị.
}
playing('rock')