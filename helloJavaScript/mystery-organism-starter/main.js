// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,    
    mutate () {
      rd1 = Math.floor(Math.random() * 15)
      rd2 = returnRandBase()
      console.log(rd1)
      console.log(dna[rd1])
      console.log(rd2)
      while(dna[rd1] === rd2) {
        rd2 = returnRandBase()                                
        console.log(rd1)
        console.log(dna[rd1])
        console.log(rd2)        
      } 
      dna[rd1] = rd2
      return {
        specimenNum,
        dna
      }             
    },
    compareDNA(samp1) {
      equalTimes = 0;
      len1 = samp1.dna.length;
          for (i=0; i<len1; i++) {
            if (samp1.dna[i] === dna[i]) {
              equalTimes +=1
            }
          }          
          console.log(`specimen ${samp1.specimenNum} and specimen ${specimenNum} have ${equalTimes/len1 * 100}% DNA in common`)
    },
    willLikelySurvive(){
      survive = 0
      for (i=0; i<dna.length; i++) {
        switch (dna[i]) {
          case 'C':            
          case 'G':{
            survive +=1;
            break
          }
        }
      }
      console.log(survive)
      console.log(dna.length)      
      console.log(`survive percent: ${(survive / dna.length)*100}%`)
      if (survive / dna.length >= 60/100) {
        console.log('true')
        return true
      } else 
      console.log('false')
      return false
    }
  }
}
function createpAequor(){
  let i = 0;
  const pAequor = [];
  temp = pAequorFactory(i, mockUpStrand())
  while (i <= 30){
    if (temp.willLikelySurvive() === true){
      i=+1
      console.log(temp.willLikelySurvive())
      console.log(temp)
      pAequor.push(temp)
    }
  } return pAequor
}
//const test1 = pAequorFactory(1, mockUpStrand())
//console.log(test1)
//console.log(test1.mutate())

/*
mutate () {
      rd1 = Math.floor(Math.random() * 15)
      rd2 = returnRandBase()
      console.log(rd1)
      console.log(dna[rd1])
      console.log(rd2)
      while(dna[rd1] === rd2) {        
        rd2 = returnRandBase()       
        console.log(rd1)
        console.log(dna[rd1])
        console.log(rd2)        
      } dna[rd1] = rd2
      return {
        specimenNum,
        dna
      }       
    }
    */
/*
function massProduct () {
  for (i=1; i<=10; i++){
    console.log(pAequorFactory(i, mockUpStrand()))
  }
}

massProduct()
*/

/*function compareDNA(samp1, samp2) {
  equalTimes = 0;
  len1 = samp1.dna.length;
  len2 = samp2.dna.length;
      for (i=0; i<len1; i++) {
        if (samp1.dna[i] === samp2.dna[i]) {
          equalTimes +=1
        }
      }
      //for (j=0; j<len2; i++) {
      //  temp2 = samp2.dna[1]
      //}
      console.log(`specimen ${samp1.specimenNum} and specimen ${samp2.specimenNum} have ${equalTimes/len1 * 100}% DNA in common`)
}
compareDNA(pAequor1, pAequor3)
*/
const dna = [
  'T', 'G', 'G', 'T',     
  'A', 'C', 'C', 'A',     
  'A', 'C', 'G', 'C',     
  'T', 'C', 'A'
]
const dna2 = [
  'C', 'G', 'G', 'G',     
    'T', 'A', 'T', 'T',     
    'A', 'C', 'A', 'G',     
    'A', 'C', 'A'
]
const dna3 = mockUpStrand()
const dna4 = mockUpStrand()
const pAequor = pAequorFactory(0, dna)
const pAequor4 = pAequorFactory(4, dna4)

const pAequor100 = pAequorFactory(100, mockUpStrand())
console.log(dna)
console.log(dna4)
pAequor.compareDNA(pAequor4)
pAequor4.willLikelySurvive()
createpAequor()