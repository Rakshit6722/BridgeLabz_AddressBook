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

interface AddresskManager{
    name: String;
    data: AddressBook | any;
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
        const duplicateContact = this.addressBook.filter(item => item.firstname === contact.firstname && item.lastname === contact.lastname)
        if(duplicateContact[0]){
            console.log("Contact with the same name already exist!")
            return
        }
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

export class AddressBookManager{
    private manager: AddresskManager[]

    constructor(){
        this.manager = []
    }

    addAddressBook(name: string){
        let findName = this.manager.filter(item => item.name === name)
        if(!findName[0]){
            this.manager.push({
                name,
                data: new AddressBook()
            })
    
            console.log("Address Book Saved!")
        }else{
            console.log("Name already taken!")
        }
    }

    getAllAddressBook(): AddresskManager[]{
        return this.manager
    }

    getAddressBook(name: string): AddresskManager | void{
        const foundAddressBook = this.manager.filter(item => item.name === name)
        if(foundAddressBook){
            return foundAddressBook[0]
        }else{
            console.log("No address book found with this name")
        }
    }
}

export default AddressBook