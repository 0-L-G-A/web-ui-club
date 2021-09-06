// console.log('TASK 1');

// class Student1{
//     constructor(fullName, direction){
//         this.fullName = fullName;
//         this.direction = direction;
//     }
//     showFullName(){return this.fullName};
//     nameIncludes(data){
//         return this.fullName.includes(data);
//     }
//     static studentBuilder(fullN, dir){
//         return new Student1(fullN, dir);
//     }
//     get direction(){
//         return this._direction;
//     }
//     set direction(newD){
//         this._direction = newD;
//     }
// }

// const stud1 = new Student1('Ivan Petrenko', 'web');
// const stud2 = new Student1('Sergiy Koval', 'python');
// const stud3 = Student1.studentBuilder('Ihor Kohut', 'qc');
// console.log(stud1);
// console.log(stud2);
// console.log(stud3);

// console.log('Full name');
// console.log(stud1.showFullName());
// console.log('Name includes: Ivan');
// console.log(stud1.nameIncludes('Ivan'));
// console.log('Name includes: b');
// console.log(stud1.nameIncludes('b'));
// console.log('Change direction of second student:');
// console.log(stud2.direction);
// stud2.direction = 'ui';
// console.log(stud2.direction);




// console.log(' ');
// console.log('TASK 2');

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     showFullName(){
//         return this.firstName + " " + this.lastName
//     };
// }

// class Student extends Person{
//     constructor(firstName, lastName, year){
//         super(firstName, lastName);
//         this.year = year;
//     }
//     showFullName(middleName){
//         return this.firstName + " " + this.lastName + " " + middleName
//     };
//     showCourse(){
//         let today = new Date();
//         let currentYear = today.getFullYear();
//         const course = currentYear - this.year;
//         if(course <= 6){return course}
//         if(course > 6){return `Student finished the university ${course - 6} ago`}
//     }
// }

// const s1 = new Student("Petro", "Petrenko", 2017);
// console.log(s1);
// console.log('Full Name:');
// console.log(s1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + s1.showCourse()); //Current course: 4




console.log(' ');
console.log('TASK 3');

class Worker{
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this. dayRate = dayRate;
        this.workingDays = workingDays;
        this.experience = 1.2;
        this.salary = this.dayRate * this.workingDays * this.experience;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    get showExp(){
        return this.experience;
    }
    set setExp(val){
        this.experience = val;
    }
    showSalaryWithExperience(){
        return this.dayRate * this.workingDays * this.experience;
    }
    static sortSalaries(...workers){
        const sortedArr = workers.sort((a,b) => a.salary - b.salary)
        let entries = sortedArr.map((worker) => [(worker.fullName).replace(' ','_'), worker.salary])
        return Object.fromEntries(entries);
    }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1);
console.log(worker1.fullName);                 
console.log(`Salary without experience: ${worker1.showSalary()}`);
console.log("New experience: " + worker1.showExp);
console.log(`Salary with experience 1.2: ${worker1.showSalaryWithExperience()}`);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(`Salary with experience 1.5: ${worker1.showSalaryWithExperience()}`);


const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2);
console.log(worker2.fullName);                 
console.log(`Salary without experience: ${worker2.showSalary()}`);
console.log("New experience: " + worker2.showExp);
console.log(`Salary with experience 1.2: ${worker2.showSalaryWithExperience()}`);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(`Salary with experience 1.5: ${worker2.showSalaryWithExperience()}`);

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3);
console.log(worker3.fullName);                 
console.log(`Salary without experience: ${worker3.showSalary()}`);
console.log("New experience: " + worker3.showExp);
console.log(`Salary with experience 1.2: ${worker3.showSalaryWithExperience()}`);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(`Salary with experience 1.5: ${worker3.showSalaryWithExperience()}`);

console.log(Worker.sortSalaries(worker1, worker2, worker3));
