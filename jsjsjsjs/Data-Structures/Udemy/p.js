class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
    fullName(){
        return `Your full name is ${this.fullName} ${this.lastName}`
    }
    static EnrollStudents(...students){
        //utility function
        return "Enrolling Students";
    }
}
