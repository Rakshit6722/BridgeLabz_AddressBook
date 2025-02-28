import readLineSync from 'readline-sync';
import { AddressBookManager } from './classAddressBook';
import AddressBook from './classAddressBook';
import { Contact } from './classAddressBook';

const createContact = (): Contact => {
    const firstname: string = readLineSync.question("Enter firstname: ").toLowerCase()
    const lastname: string = readLineSync.question("Enter lastname: ").toLowerCase()
    const address: string = readLineSync.question("Enter address: ")
    const city: string = readLineSync.question("Enter city: ").toLowerCase()
    const state: string = readLineSync.question("Enter state: ").toLowerCase()
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

const addressBook = (address_book: AddressBook) => {

    while (true) {
        console.log("Operations:")

        let opertaionsStr = `0: Get All Contacts \n1: Add Contact \n2: Edit Contact \n3: Delete Contact \n4: Add Multiple Contacts \n5: sort the entries in the address book alphabetically by Person’s name \n6: get number of contact persons i.e. count by City or State \n7: sort the entries in the address book by City, State, or Zip \n8: Save address book \n9: Exit`

        console.log(opertaionsStr)

        const operation: number = parseInt(readLineSync.question("Choose:"))

        switch (operation) {
            case 0:
                const contacts = address_book.getAllContacts()
                if(contacts.length>0){
                    console.log("All Contacts:")
                    contacts.forEach((contact,idx) => {
                        let formattedContact = `Contact ${idx+1}:\n Firstname: ${contact.firstname}\n Lastname: ${contact.lastname}\n Address: ${contact.address}\n City: ${contact.city}\n State: ${contact.state}\n ZIP: ${contact.zip}\n Phone Number: ${contact.phoneNumber}\n Email: ${contact.email}\n`
                        console.log(formattedContact)
                    })
                    console.log('--------------------------------')
                    break
                }else{
                    console.log("No contacts found!\n")
                    console.log('--------------------------------')
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
                let noOfContacts: number = parseInt(readLineSync.question("Enter number of contacts you want to add: "))
                while(noOfContacts){
                    address_book.addContact(createContact())
                    noOfContacts--
                }
                break
            case 5:
                address_book.sortByName()
                break
            case 6:
                const cityOrState = readLineSync.question("Enter city or state: ").toLowerCase()
                console.log(address_book.getCountByCityOrState(cityOrState))
                break
            case 7:
                const parameter = readLineSync.question("Enter parameter: ").toLowerCase()
                address_book.sortByParameter(parameter)
                break
            case 8:
                address_book.saveAddressBook()
                break
            case 9:
                console.log("Exiting...")
                return
            default:
                console.log("Invalid choice!")
        }
    }
}


const runAddressBookSystem = () => {
    console.log("<-------------ADDRESS BOOK--------------->")
    const addressBookManager = new AddressBookManager()

    while(true){
        const optionString: string = `1: Add new address book \n2: Get all address books \n3: Select an address book by name \n4: search Person in a City or State across the multiple Address Book \n5: Exit`
    
        console.log(optionString)
    
        const choice: number = parseInt(readLineSync.question("Choose: "))
    
    
        switch(choice){
            case 1:
                const name: string = readLineSync.question("Enter address book name: ")
                addressBookManager.addAddressBook(name)
                break;
            case 2:
                const allAddressBook = addressBookManager.getAllAddressBook()
                console.log("Address Books:")
                if(allAddressBook.length>0){
                    allAddressBook.forEach((item)=>{
                        console.log(item.name)
                    })
                }else{
                    console.log("No address book found!")
                }
                break;
            case 3:
                const selectName: string = readLineSync.question("Enter name: ")
                const selectAddressBook = addressBookManager.getAddressBook(selectName)
                if(selectAddressBook){
                    addressBook(selectAddressBook.data)
                }else{
                    "No address book fount with that name"
                }
                break;
            case 4:
                const personName = readLineSync.question("Enter name: ")
                const cityOrState = readLineSync.question("Enter city or state: ")
                const foundPerson = addressBookManager.searchPersonInACityOrState(personName, cityOrState)
                if(foundPerson){
                    foundPerson.forEach((item: any) => {
                        console.log(item)
                    })
                }
                break;
            case 5:
                console.log("Exiting...") 
                return
            default:
                console.log("Invalid choice!")
        }
    }
}

runAddressBookSystem()




