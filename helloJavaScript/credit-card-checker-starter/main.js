// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 3, 3, 0]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function checkNumber(card) {
        temp1a = 0;
        temp1b = 0;
        temp2 = 0;
        len = card.length - 1;
        for (i=len-1; i>=0; i-=2){
                if (card[i]*2 < 9) {
                        temp1a = temp1a + card[i]*2                        
                } else if (card[i]*2 >9) {
                        temp1b = temp1b + (card[i]*2 - 9)
                }                
        }         
        for (j=len-2; j>=0; j-=2){
                temp2 = temp2 + card[j]
        }
        if ((temp1a + temp1b + temp2)%10 === 0){
                return 10
        }else return (temp1a + temp1b + temp2)%10
}

function validateCred(card) {        
        if((checkNumber(card) + card[len])%10 === 0) {
                return true
        }       return false                   
}
function checkCards (cards) {
        for (card of cards) {
                if (validateCred(card)) {
                        console.log(`No${cards.indexOf(card) + 1}: ${card} is valid`)
                } else console.log(`No${cards.indexOf(card) + 1}: ${card} is invalid - check again`)
        }
}
function autoEdit(card) {              
        if(validateCred(card)) {
                return card
        } else  {
                card[len] = Math.abs(10-checkNumber(card))
                return card
        }
}
function findInvalidCards(cards) {
        return cards.filter(card => !validateCred(card))
}
function editInvalidCards(cards) {
        return cards.map(card => autoEdit(card))
}
function idInvalidCardCompanies(icards) {
        company = [];
        temp = '';
        for (icard of icards) {
                switch (icard[0]) {
                        case 3:
                                temp = 'Amex (American Express)';
                                break;
                        case 4:
                                temp = 'Visa';
                                break;
                        case 5:
                                temp = 'Mastercard';
                                break;
                        case 6:
                                temp = 'Discover';
                                break;
                        default: temp = 'Company not found'                        
                } if (!company.includes(temp)){
                        company.push(temp)
                }                                              
        }return company
}
const batchInvalid = findInvalidCards(batch)
console.log(`check batch: `)
checkCards(batch)
console.log(`batchInvalid card list: `)
checkCards(batchInvalid)
console.log(idInvalidCardCompanies(batchInvalid))

//Edit all invalid cards of batch and check them
editInvalidCards(batch)
//console.log(batch)
checkCards(batch)

const m1 = '40240071925225541';
const m2 = '51161497792734111';
const m3 = '3485409482098181';
const m4 = '6011454847692822';
const m5 = '3529252999341145';
const m6 = '5443679480447098';
const m7 = '30044190787319';
const m8 = '36731299367928';
const m9 = '6304739378348513';
const m10 = '949918';
const mystery = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];


function convertToArray(card){
        cardArr = []
        for (num of card) {
                cardArr.push(num*1)
        }
        return cardArr
}
function convertAllToArray(cards){
        cardsArr = []
        for (card of cards){
                cardsArr.push(convertToArray(card))
        }
        return cardsArr
}
const mysteryArray = convertAllToArray(mystery)
const mysteryInvalid = findInvalidCards(mysteryArray)
console.log(`check mystery: `)
checkCards(mysteryArray)
console.log(`mysteryInvalid card list: `)
console.log(mysteryInvalid)
console.log(idInvalidCardCompanies(mysteryInvalid))

/* - Cach 1 dung .push() de tao ra array moi
function findInvalidCards(cards) {
        invalid = [];
        for (card of cards) {
                if (validateCred(card) === false) {
                        invalid.push(card)
                }
        } return invalid
}
*/

/*
function idInvalidCardCompanies(icards) {
        company = [];
        temp = '';
        for (icard of icards) {
                if (icard[0] === 3) {
                        temp = 'Amex (American Express)';                                           
                }else if (icard[0] === 4) {
                        temp = 'Visa';
                }else if (icard[0] === 5) {
                        temp = 'Mastercard';
                }else if (icard[0] === 6) {
                        temp = 'Discover';                
                } else return 'Company not found'
                if (company.indexOf(temp) === -1){
                        company.push(temp)
                }                
        } return company
}
*/




/*const invalidCards = findInvalidCards(batch);
//console.log(idInvalidCardCompanies(invalidCards))*/

