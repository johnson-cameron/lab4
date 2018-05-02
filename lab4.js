"use strict";

class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor(){
        this.contactList = [];
    }
    add(info){
        let newContact = new Contact (info.name, info.email, info.phone, info.relation);
        contactList.push(newContact);
        console.log(this.contactList);
    }

    deleteAt(index){
        console.log(`removed the contact ${contactList[index].name} in the number ${index} index.`)
        contactList.splice(index, 1);
    }

    print(){
    contactList.forEach((contact) => {
        console.log(contact);
     });
    }
}

const contactList = [
    {name: "John", email: "johnny@gmail.com", phone: "313-590-5545", relation: "Brother"},
    {name: "Timmy", email: "biggiesmalls@yahoo.com", phone: "563-343-0084", relation: "Boss" },
    {name: "Ms. T", email: "lilT@TilaTequilla.com", phone: "545-662-6234", relation: "TV Lady"}
];
let ans = true;
const addressBook = new AddressBook();
while (ans !== "quit"){
    ans = prompt("Add, Delete, Print, or Quit?");
    switch(ans.toLowerCase()){
        case "add":
            let info = {
                name: prompt("Please enter contacts name"),
                email: prompt("Please enter contact email address"),
                phone: prompt("Please enter the contacts phone number"),
                relation: prompt("Enter your relation to the contact"),
            }
            addressBook.add(info);
            break;
        case "delete":
            let index = prompt("What index number would you like to delete?");
            addressBook.deleteAt(index);
            break;
        case "print":
            addressBook.print();
            break;
        case "quit":
            break;
    }

}




