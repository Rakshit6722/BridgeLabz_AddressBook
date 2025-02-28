"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const classAddressBook_1 = require("./classAddressBook");
const createContact = () => {
    const firstname = readline_sync_1.default.question("Enter firstname: ").toLowerCase();
    const lastname = readline_sync_1.default.question("Enter lastname: ").toLowerCase();
    const address = readline_sync_1.default.question("Enter address: ");
    const city = readline_sync_1.default.question("Enter city: ").toLowerCase();
    const state = readline_sync_1.default.question("Enter state: ").toLowerCase();
    const zip = parseInt(readline_sync_1.default.question("Enter ZIP code: "));
    const phoneNumber = parseInt(readline_sync_1.default.question("Enter Phone Number: "));
    const email = readline_sync_1.default.question("Enter email address: ");
    const newContact = {
        firstname,
        lastname,
        address,
        city,
        state,
        zip,
        phoneNumber,
        email,
    };
    return newContact;
};
const editUsingName = () => {
    const name = readline_sync_1.default.question("Find contact by entering first name: ");
    return name.toLowerCase();
};
const deleteUsingName = () => {
    const name = readline_sync_1.default.question("Find contact by entering first name: ");
    return name.toLowerCase();
};
const addressBook = (address_book) => {
    while (true) {
        console.log("Operations:");
        let opertaionsStr = `0: Get All Contacts \n1: Add Contact \n2: Edit Contact \n3: Delete Contact \n4: Add Multiple Contacts \n5: sort the entries in the address book alphabetically by Person’s name \n6:get number of contact persons i.e. count by City or State \n7: sort the entries in the address book by City, State, or Zip \n8: Save address book \n9: Exit`;
        console.log(opertaionsStr);
        const operation = parseInt(readline_sync_1.default.question("Choose:"));
        switch (operation) {
            case 0:
                const contacts = address_book.getAllContacts();
                if (contacts.length > 0) {
                    console.log("All Contacts:");
                    contacts.forEach((contact, idx) => {
                        let formattedContact = `Contact ${idx + 1}:\n Firstname: ${contact.firstname}\n Lastname: ${contact.lastname}\n Address: ${contact.address}\n City: ${contact.city}\n State: ${contact.state}\n ZIP: ${contact.zip}\n Phone Number: ${contact.phoneNumber}\n Email: ${contact.email}\n`;
                        console.log(formattedContact);
                    });
                    console.log('--------------------------------');
                    break;
                }
                else {
                    console.log("No contacts found!\n");
                    console.log('--------------------------------');
                    break;
                }
            case 1:
                address_book.addContact(createContact());
                break;
            case 2:
                address_book.editContact(editUsingName());
                console.log(address_book.getAllContacts());
                break;
            case 3:
                address_book.deleteContact(deleteUsingName());
                break;
            case 4:
                let noOfContacts = parseInt(readline_sync_1.default.question("Enter number of contacts you want to add: "));
                while (noOfContacts) {
                    address_book.addContact(createContact());
                    noOfContacts--;
                }
                break;
            case 5:
                address_book.sortByName();
                break;
            case 6:
                const cityOrState = readline_sync_1.default.question("Enter city or state: ").toLowerCase();
                console.log(address_book.getCountByCityOrState(cityOrState));
                break;
            case 7:
                const parameter = readline_sync_1.default.question("Enter parameter: ").toLowerCase();
                address_book.sortByParameter(parameter);
                break;
            case 8:
                address_book.saveAddressBook();
                break;
            case 9:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice!");
        }
    }
};
const runAddressBookSystem = () => {
    console.log("<-------------ADDRESS BOOK--------------->");
    const addressBookManager = new classAddressBook_1.AddressBookManager();
    while (true) {
        const optionString = `1: Add new address book \n2: Get all address books \n3: Select an address book by name \n4: search Person in a City or State across the multiple Address Book \n5: Exit`;
        console.log(optionString);
        const choice = parseInt(readline_sync_1.default.question("Choose: "));
        switch (choice) {
            case 1:
                const name = readline_sync_1.default.question("Enter address book name: ");
                addressBookManager.addAddressBook(name);
                break;
            case 2:
                const allAddressBook = addressBookManager.getAllAddressBook();
                console.log("Address Books:");
                if (allAddressBook.length > 0) {
                    allAddressBook.forEach((item) => {
                        console.log(item.name);
                    });
                }
                else {
                    console.log("No address book found!");
                }
                break;
            case 3:
                const selectName = readline_sync_1.default.question("Enter name: ");
                const selectAddressBook = addressBookManager.getAddressBook(selectName);
                if (selectAddressBook) {
                    addressBook(selectAddressBook.data);
                }
                else {
                    "No address book fount with that name";
                }
                break;
            case 4:
                const personName = readline_sync_1.default.question("Enter name: ");
                const cityOrState = readline_sync_1.default.question("Enter city or state: ");
                const foundPerson = addressBookManager.searchPersonInACityOrState(personName, cityOrState);
                if (foundPerson) {
                    foundPerson.forEach((item) => {
                        console.log(item);
                    });
                }
                break;
            case 5:
                console.log("Exiting...");
                return;
            default:
                console.log("Invalid choice!");
        }
    }
};
runAddressBookSystem();
