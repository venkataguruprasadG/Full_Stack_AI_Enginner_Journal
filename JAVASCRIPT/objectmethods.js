/* Problem Statement
Add to your student object:

Method sayHello() that prints "Hello from [name]!"

Method listSkills() that prints first skill only

Call both methods */

let student = {
    name: "guru prasad",
    skills: ["JS", "HTML"],
    sayHello: function () {
        console.log("Hello from " + this.name + "!");
    },
    listSkills: function () {
        console.log(this.skills[0]);
    }
}
student.sayHello();
student.listSkills();
