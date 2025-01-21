import readLineSync from 'readline-sync';
import { readConfigFile, StringLiteral } from 'typescript';
import AddressBook from './classAddressBook';
import { Contact } from './classAddressBook';

//UC1 - ability to create a new contact
const createContact = (): Contact => {
    const firstname: string = readLineSync.question("Enter firstname: ").toLowerCase()
    const lastname: string = readLineSync.question("Enter lastname: ").toLowerCase()
    const address: string = readLineSync.question("Enter address: ")
    const city: string = readLineSync.question("Enter city: ")
    const state: string = readLineSync.question("Enter state: ")
    const zip: number = parseInt(readLineSync.question("Enter ZIP code: "))
    const phoneNumber: number = parseInt(readLineSync.question("Enter Phone Number: "))
    const email: string = readLineSync.question("Enter email address: ")

    const newContact: Contact = {
        firstname,
        lastname,
        address,
        city,
        state,
        zip,
        phoneNumber,
        email,
    }

    return newContact
}

const editUsingName = () => {
    const name: string = readLineSync.question("Find contact by entering first name: ")
    return name.toLowerCase()
}

const deleteUsingName = () => {
    const name: string = readLineSync.question("Find contact by entering first name: ")
    return name.toLowerCase()
}

const addressBook = () => {

    let address_book = new AddressBook()

    console.log("<-------------ADDRESS BOOK--------------->")

    while (true) {
        console.log("Operations:")

        let opertaionsStr = `0: Get All Contacts \n1: Add Contact \n2: Edit Contact \n3: Delete Contact \n4: Exit`

        console.log(opertaionsStr)

        const operation: number = parseInt(readLineSync.question("Choose:"))

        switch (operation) {
            case 0:
                const contacts = address_book.getAllContacts()
                if(contacts.length>0){
                    console.log(contacts)
                    break
                }else{
                    console.log("No contacts found!\n")
                    break
                }
            case 1:
                address_book.addContact(createContact())
                break
            case 2:
                address_book.editContact(editUsingName())
                console.log(address_book.getAllContacts())
                break
            case 3:
                address_book.deleteContact(deleteUsingName())
                break
            case 4:
                console.log("Exiting...")
                return

            default:
        }
    }
}

addressBook()




