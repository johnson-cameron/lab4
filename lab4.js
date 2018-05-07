"use strict";

class AddressBook {
    constructor(contactList){
        this.contactList = [
            // {name: "John", email: "johnny@gmail.com", phone: "313-590-5545", relation: "Brother"},
            // {name: "Timmy", email: "biggiesmalls@yahoo.com", phone: "563-343-0084", relation: "Boss" },
            // {name: "Ms. T", email: "lilT@TilaTequilla.com", phone: "545-662-6234", relation: "TV Lady"}
        ];
    }

    add() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        // let relation = document.getElementById("option").value;

        if(name !== "" && email !== "" && phone !== ""){
            const info = {
              name: name,
              email: email,
              phone: phone
            //   relation: relation
            }
      
            //create a new instance of new contact and push into contacts array
            const newContact = new Contact(info.name, info.email, info.phone);
            addressBook.contactList.push(newContact);
        
            // reset input values
            addressBook.clearInputs();
            
            //display all the contacts on the page
            addressBook.display();
      
        } else { //let them know they didn't enter enough info
            alert("Please enter a new contact name as well as an email and phone.")
          }
          console.log(addressBook.contactList);
    }

    clearInputs(){
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        // document.getElementById("relation").value = "";
      }

    display(){
        let arrayVariable = addressBook.contactList;
        let arrayLength = arrayVariable.length;
        let newContactCard;

        let contactsContainer =document.getElementById('list');
        contactsContainer.innerHTML ="";

        for(let i = 0; i < arrayLength; i++){
            newContactCard = document.createElement('section');
            newContactCard.className = 'contactList';
            newContactCard.innerHTML = `
            <p>Name: ${arrayVariable[i].name}</p>
            <p>Email: ${arrayVariable[i].email}</p>
            <p>Phone: ${arrayVariable[i].phone}</p>
            <i class="fa fa-trash-alt trashCan"></i>`;

            document.getElementById('list').appendChild(newContactCard);
        }
    }

    deleteAt(index){
        console.log(`removed the contact ${contactList[index].name} in the number ${index} index.`)
        contactList.splice(index, 1);
    }

    deleteByName(i) {
        this.contacts.splice(i, 1);
    }
}
    
class Contact {
    constructor(name, email, phone, relation){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const addressBook = new AddressBook();

document.getElementById("add").addEventListener("click", addressBook.add); 

addressBook.display();