export class Account{

    constructor(private id:number, public name :string) { }

    getAccountDetails(){
        return `AccountNo : ${this.id}, Name : ${this.name}`;
    }
}

let johnDoe = new  Account(1212,'John Doe');
const details = johnDoe.getAccountDetails();
console.log(details);