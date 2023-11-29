class shiftCipher {
        constructor(num) {
                this.num = num;
        }
        encrypt(text) {
                let newShiftText ='';                
                for (let i=0; i<text.length; i++){      
                        let tempCode = text.charCodeAt(i) + this.num;
                        let charCode = 0;                  
                        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <=90) {
                                if (tempCode > 90) {
                                        charCode = (tempCode - 90) + 65 - 1;
                                } else {
                                        charCode = tempCode;
                                }                                
                        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <=122) {
                                if (tempCode > 122) {
                                        charCode = (tempCode - 122) + 97 - 1; 
                                } else {
                                        charCode = tempCode;
                                }                                
                        } else {
                                charCode = text.charCodeAt(i);
                        }
                        newShiftText += String.fromCharCode(charCode).toUpperCase();                
                } 
                return newShiftText;
        }
        decrypt(text) {
                let newShiftText ='';                
                for (let i=0; i<text.length; i++){     
                        let tempCode = text.charCodeAt(i) - this.num;
                        let charCode = 0;                   
                        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <=90){
                                if (tempCode < 65) {
                                        charCode = 90 - (65 - tempCode) +1 
                                } else {
                                        charCode = tempCode;
                                }                                
                        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <=122) {
                                if (tempCode < 97) {
                                        charCode = 122 - (97 - tempCode) +1
                                } else {
                                        charCode = tempCode;
                                }                                
                        } else {
                                charCode = text.charCodeAt(i);
                        }
                        newShiftText += String.fromCharCode(charCode).toLowerCase();                
                } 
                return newShiftText;
        }
}

const newText = new shiftCipher(26);
console.log(newText.encrypt('ga  tho %% GZy 1111 abcdefghijklmnopqrstuvxyz ^^^'))
console.log(newText.decrypt('ga  tho %% GBA 1111 abcDEFghijklmnopqrstuvxyz &^*('))