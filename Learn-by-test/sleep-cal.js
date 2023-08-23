const getSleepHours = day => {
        switch (day) {
                case 'Monday':
                        return 8;
                case 'Tuesday':
                        return 8;
                case 'Wednesday':
                        return 8;
                case 'Thursday':
                        return 8;
                case 'Friday':
                        return 8;
                case 'Saturday':
                        return 7;
                case 'Sunday':
                        return 9;
        }                        
};

const getActualSleepHours = () => 
                getSleepHours('Monday') 
                + getSleepHours('Tuesday') 
                + getSleepHours('Wednesday') 
                + getSleepHours('Thursday') 
                + getSleepHours('Friday') 
                + getSleepHours('Saturday') 
                + getSleepHours('Sunday')
;


const getIdeaSleepHours = (ideaHours) => {        
        return ideaHours*7;
}
const actualSleepHours = getActualSleepHours();
let ideaSleepHours;
const checkSleepTime = () => {        
        if (actualSleepHours === ideaSleepHours) {
                return "perfect amount of sleep";
        } else if (actualSleepHours > ideaSleepHours) {
                return 'You sleep too much'
        }       return `You need sleep more`;
}

const calculateSleepDebt = (hours) => {
        ideaSleepHours = getIdeaSleepHours(hours);
        console.log(`Actual Sleep Hours: ${actualSleepHours}`);
        console.log(`Idea Sleep Hours: ${ideaSleepHours}`);
        console.log(checkSleepTime());
        console.log(`Sleep Dept Time: ` + (ideaSleepHours - actualSleepHours) + ` hours`);        
}
calculateSleepDebt(10);






