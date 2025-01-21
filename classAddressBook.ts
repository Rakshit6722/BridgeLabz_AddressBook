import readLineSync from 'readline-sync';

export interface Contact{
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: number;
    email: string;
}

class AddressBook{

    private addressBook: Contact[]

    constructor(){
        this.addressBook = []
    }

    getAllContacts(): Contact[]{
        return this.addressBook
    }

    addContact(contact: Contact){
        this.addressBook.push(contact)
        console.log("Contact saved!\n")
    }

    
    editContact(firstname: string): void{
        let foundObj = this.addressBook.filter(item => item.firstname === firstname)
        if(foundObj.length !== 0){
            console.log("Enter in details you want to edit otherwise leave blank")
            const firstname: string = readLineSync.question("Edit firstname: ");
            const lastname: string = readLineSync.question("Edit lastname: ");
            const address: string = readLineSync.question("Edit address: ");
            const city: string = readLineSync.question("Edit city: ");
            const state: string = readLineSync.question("Edit state: ");
            const zip: number = parseInt(readLineSync.question("Edit ZIP code: "))
            const phoneNumber: number = parseInt(readLineSync.question("Edit phone number: "))
            const email: string = readLineSync.question("Edit email-address: ");

            if(firstname) foundObj[0].firstname = firstname
            if(lastname) foundObj[0].lastname = lastname
            if(address) foundObj[0].address = address
            if(city) foundObj[0].city = city
            if(state) foundObj[0].state = state
            if(zip) foundObj[0].zip = zip
            if(phoneNumber) foundObj[0].phoneNumber = phoneNumber
            if(email) foundObj[0].email = email

            console.log("Contact edited successfully!")
        }else{
            console.log("Contact not found!!")
        }
    }

    deleteContact(firstname: string){
        let beforeLength = this.addressBook.length
        this.addressBook = this.addressBook.filter(item => item.firstname !== firstname)
        if(beforeLength !== this.addressBook.length) console.log("Contact deleted successfully")
        else console.log("No contact with this name found!")
    }


}

export default AddressBook