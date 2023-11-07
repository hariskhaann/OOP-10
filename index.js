import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push();
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Can you chosse any one person to talk",
            name: "select",
            choices: ["Self", "student"]
        });
        if (ans.select == "Self") {
            console.log("Hello I am talking with myself");
            console.log("talk with student");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Can you choose student which you are talking",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, or i am fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, or i am fine.........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
