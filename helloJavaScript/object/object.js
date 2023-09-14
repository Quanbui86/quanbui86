// dogFactory()
// Write your code here:
const dogFactory = (name, breed, weight) => {
        return {
          _name: name,
          _breed: breed,
          _weight: weight,
          bark () {
            return `ruff! ruff!`
          },    
          get name() {
            return this._name;
          },
          get breed() {
            return this._breed;
          },
          get weight() {
                  return this._weight;
          },
          set name(newName) {
            if (typeof newName === 'string') {
              this._name = newName
            } console.log('set name again')
          },
          set breed(newbreed) {
            if (typeof newbreed === 'string') {
              this._breed = newbreed
            } console.log('set breed again')
          },
          set weight(newweight) {
            if (typeof newweight === 'number') {
              return this._weight = newweight
            } console.log('set weight again')
          },
          eatTooManyTreats () {
            return this.weight += 1
          }
        }
      }
      
      const dog = dogFactory('Joe', 'Pug', 20)
      dog.weight = 5
      console.log(dog.bark())
      dog.eatTooManyTreats()
      dog.eatTooManyTreats()
      dog.eatTooManyTreats()
      dog.eatTooManyTreats()
      dog.eatTooManyTreats()      
      console.log(dog.weight)
      
          
        
        
      
      