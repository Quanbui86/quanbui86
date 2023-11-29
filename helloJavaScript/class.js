class Media {
        constructor(title, isCheckedOut, ratings) {
          this._title = title;
          this._isCheckedOut = false;
          this._ratings = [];
        }
        get title(){
          return this._title;
        }
        get isCheckedOut() {
          return this._isCheckedOut;
        }
        get ratings() {
          return this._ratings
        }
        getAverageRating(){
          return this._ratings.reduce((total, amount, index, arr) => {
            total += amount;
            if (index === arr.length - 1) {
              return total / arr.length
            } else {
              return total;
            }
          })
        }
        toggleCheckOutStatus() {
          if (this._isCheckedOut === true) {
            return this._isCheckedOut = false;
          } else {
            return this._isCheckedOut = true;
          }    
        }
        addRating(x) {
          this._ratings.push(Math.min(Math.max(x, 1), 5))
        }
      }
      class Book extends Media {
        constructor(author, title, pages) {
          super(title);
          this._author = author;
          this._pages = pages;
        }
        get author() {
          return this._author;
        }
        get pages() {
          return this._pages;
        }
      }
      
      class Movie extends Media {
        constructor (director, title, runTime) {
          super(title);
          this._director = director;
          this._runTime = runTime;
        }
        get director() {
          return this._director;
        }
        get runTime() {
          return this._runTime;
        }
      }
      const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
      const historyOfEverything2 = new Book('Bill Bryson', 'A Short History of Nearly Everything 2', 544);
      historyOfEverything.toggleCheckOutStatus();
      console.log(historyOfEverything.isCheckedOut)
      historyOfEverything.addRating(4)
      console.log(historyOfEverything)
      console.log(historyOfEverything2)
      
      console.log(historyOfEverything.getAverageRating())
      const speed = new Movie('Jan de Bont', 'Speed', 116)
      speed.toggleCheckOutStatus();
      console.log(speed.isCheckedOut)
      speed.addRating(1)
      speed.addRating(3)
      speed.addRating(6)
      console.log(speed)
      class CD extends Media {
        constructor(artist, title, songs) {
          super(title);
          this._artist = artist;
          this._songs = songs;
        }
        get artist() {
          return this._artist;
        }
        get songs() {
          return this._songs;
        }
        shuffle(){
          let shuffleList = [];
          while (shuffleList.length < this._songs.length){
            let rd = Math.floor(Math.random() * this._songs.length)
            if (!shuffleList.includes(this._songs[rd])) {
              shuffleList.push(this._songs[rd])
            }
          }
          return this._songs = shuffleList;
        }
      }
      const NewCD = new CD('Quan', 'My JourNey', ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11']);
      console.log(NewCD)
      NewCD.shuffle();
      console.log(NewCD)
      NewCD.shuffle();
      console.log(NewCD.songs)
      

      //SCHOOL - CLASS
      class School {
        constructor (name, level, numberOfStudents) {
          this._name = name;
          this._level = level;
          this._numberOfStudents = numberOfStudents;
        }
        get name() {
          return this._name;
        }
        get level() {
          return this._level;
        }
        get numberOfStudents() {
          return this._numberOfStudents;
        }
        set numberOfStudents(x){
          //this._numberOfStudents = x;
          if (typeof x === 'number'){
            this._numberOfStudents = x;
          } else {
            console.log('inser a number')
          }
        }
        quickFacts(){
          console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
        }
        static pickSubstituteTeacher(teachers){
          let random = Math.floor(Math.random() * teachers.length);
          console.log(teachers[random]);
          return teachers[random];
        }
      }
      
      class Primary extends School {
        constructor (name, numberOfStudents, pickupPolicy) {
          super(name, 'primary', numberOfStudents);    
          this._pickupPolicy = pickupPolicy;
        }
        get pickupPolicy() {
          return this._pickupPolicy;
        }
      }
      class Middle extends School {
        constructor(name, numberOfStudents) {
          super(name, 'middle', numberOfStudents);
        }
      }
      class High extends School {
        constructor(name, numberOfStudents, sportsTeams) {
          super(name, 'high', numberOfStudents);
          this._sportsTeams = sportsTeams;
        }
        get sportsTeams() {
          return this._sportsTeams;
        }
      }
      const Cap1ThuyAn = new Primary('Cap 1 Thuy An', 901, '11h30 and 17h00')
      console.log(Cap1ThuyAn)
      Cap1ThuyAn.quickFacts();
      const Cap2DVN = new Middle('Cap 2 Dang Van Ngu', 1025)
      console.log(Cap2DVN)
      Cap2DVN.quickFacts();
      const QuocHoc = new High('Truong Quoc Hoc', 1455, 'Bong da, cau long')
      console.log(QuocHoc);
      QuocHoc.quickFacts();
      QuocHoc.numberOfStudents = 2200;
      console.log(QuocHoc.numberOfStudents);
      School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
      
      
      