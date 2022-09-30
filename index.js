// A simple caledar app
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function Year(year) {
    this.year = year;
    this.months = [];

    for (let monthIndex in monthNames) {
        this.months.push(new Month(+monthIndex + 1))
    }

    this.genYearCalendar = function () {
        const mainElement = document.createElement('div');
        console.log(mainElement);
        document.body.appendChild(mainElement);

        for (let month of this.months) {
            const monthHeading = document.createElement('h2');
            monthHeading.textContent = month.name;

            const monthElement = document.createElement('p');
            monthElement.appendChild(monthHeading);
            mainElement.appendChild(monthElement);

            // mainElement = document.createElement('div');
            
        }

        document.body.appendChild(mainElement);
        

    }
    // populate months array with month objects
    // let i = 1;
    // for (let monthName of monthNames) {
    //     this.months.push(new Month(monthName, i));
    //     i++;
    // };
}

Year.prototype.isLeap = function () {
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

function Month(index) {
    this.index = index;
    this.name = monthNames[index - 1];

    if (this.index % 2 === 0) {
        this.numDays = 30;
    } else {
        this.numDays = 31;
    }

    if (this.isLeap && this.index === 2) {
        this.numDays = 29;
    } else if (this.index === 2) {
        this.numDays = 28;
    }
}

Month.prototype = new Year(2024);

function Day(name, index) {
    this.name = name;
    this.index = index;
    
    if (this.name === 'Sunday' || this.name === 'Saturday') {
        this.isWeekend = true;
    } else {
        this.isWeekend = false;
    }

}



const testYear = new Year(2024);

// for (let monthIndex in monthNames) {
//     testYear.months.push(new Month(+monthIndex + 1))
// }



console.log(testYear.isLeap());
console.table(testYear.months);

const testMonth = new Month(3);
console.log(testMonth.numDays);

const currentYear = new Date().getFullYear();
const testYear2 = new Year(currentYear);
testYear.genYearCalendar();
// function genMonthCalendar(year) {
//     const yearObj = new Year(year);
//     for (let monthIndex in monthNames) {
//         yearObj.months.push(new Month(monthIndex));
//     }

// }