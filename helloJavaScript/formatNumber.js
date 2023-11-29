const formatNumber = (x) => {
        strx = (Math.floor(x)).toString();        
        let formatX = 0;
        for (i = strx.length-3; i > 0 ; i-=3 ) {
                strx = strx.slice(0,i) + ',' + strx.slice(i)
                console.log(i)
                console.log(strx)
                
        };
       return strx
}

console.log(formatNumber(12345678.22))
