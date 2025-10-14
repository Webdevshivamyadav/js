// here we learn about javaScript classes
// class - Basiculy class is a blueprint for object createion .
// also this is important feture of javaScriptl

// Declartion of the class
// static  keyword is used make static value because static value is only acessable with class not from the object ;
// if you want make private variable use #variableName , means use # sign ;
// use get and set for full control on a object 
// for access a class object make a instance with using new keyword 
// constructor()- this is specilly type of fuction they call then class calling time ;
// super() - function is called to make call from an partent class method ;

class student {
  constructor(name, studentId, subject, email) {
    this.name = name
    this.studentId = studentId
    this.subject = subject
    this.email = email
  }

  setStudentDetail(name, studentId, subject, email) {
    this.name = name
    this.studentId = studentId
    this.subject = subject
    this.email = email
  }
  displayInfo() {
  console.log(`Name: ${this.name}`);
  console.log(`ID: ${this.studentId}`);
  console.log(`Subjects: ${this.subject.join(", ")}`);
  console.log(`Email: ${this.email}`);
}

}

class std extends student{
  constructor(name){
    super(name);
    this.name 
  }
}
const s1 = new student('shivam', '25', [2, 5, 1, 4], 'shivam@gmail.com')
console.log(s1)
