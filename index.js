// A simple caledar app
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function genDay(name, index) {
    this.name = name;
    this.index = index;
    
    if (this.name === 'Sunday' || this.name === 'Saturday') {
        this.isWeekend = true;
    } else {
        this.isWeekend = false;
    }

}

function genMonth(name, index) {
    this.name = name;
    this.index = index;

    if (this.index % 2 === 0) {
        this.numDays = 30;
    } else {
        this.numDays = 31;
    }

    if (this.name = 'February' && )
}

function genYear(year) {
    this.year = year;
    this.months = [];

    // populate months array with month objects
    let i = 1;
    for (let monthName of monthNames) {
        this.months.push(new genMonth(monthName, i));
        i++;
    };

    // Check if year is a leap year


    this.isLeap = function() {
        if (this.year % 100 === 0 && this.year % 400 === 0) {
            return true;
        } else if (this.year % 100 === 0) {
            return false;
        } else if (this.year % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }



}

Year.prototype.isLeap = function () {
    
}

const testYear = new genYear(2024);
console.log(testYear.isLeap());