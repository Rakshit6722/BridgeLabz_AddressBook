"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressBookManager = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
class AddressBook {
    constructor() {
        this.addressBook = [];
    }
    getAllContacts() {
        return this.addressBook;
    }
    addContact(contact) {
        const duplicateContact = this.addressBook.filter(item => item.firstname === contact.firstname && item.lastname === contact.lastname);
        if (duplicateContact[0]) {
            console.log("Contact with the same name already exist!");
            return;
        }
        this.addressBook.push(contact);
        console.log("Contact saved!\n");
    }
    editContact(firstname) {
        let foundObj = this.addressBook.filter(item => item.firstname === firstname);
        if (foundObj.length !== 0) {
            console.log("Enter in details you want to edit otherwise leave blank");
            const firstname = readline_sync_1.default.question("Edit firstname: ");
            const lastname = readline_sync_1.default.question("Edit lastname: ");
            const address = readline_sync_1.default.question("Edit address: ");
            const city = readline_sync_1.default.question("Edit city: ");
            const state = readline_sync_1.default.question("Edit state: ");
            const zip = parseInt(readline_sync_1.default.question("Edit ZIP code: "));
            const phoneNumber = parseInt(readline_sync_1.default.question("Edit phone number: "));
            const email = readline_sync_1.default.question("Edit email-address: ");
            if (firstname)
                foundObj[0].firstname = firstname;
            if (lastname)
                foundObj[0].lastname = lastname;
            if (address)
                foundObj[0].address = address;
            if (city)
                foundObj[0].city = city;
            if (state)
                foundObj[0].state = state;
            if (zip)
                foundObj[0].zip = zip;
            if (phoneNumber)
                foundObj[0].phoneNumber = phoneNumber;
            if (email)
                foundObj[0].email = email;
            console.log("Contact edited successfully!");
        }
        else {
            console.log("Contact not found!!");
        }
    }
    deleteContact(firstname) {
        let beforeLength = this.addressBook.length;
        this.addressBook = this.addressBook.filter(item => item.firstname !== firstname);
        if (beforeLength !== this.addressBook.length)
            console.log("Contact deleted successfully");
        else
            console.log("No contact with this name found!");
    }
}
class AddressBookManager {
    constructor() {
        this.manager = [];
    }
    addAddressBook(name) {
        let findName = this.manager.filter(item => item.name === name);
        if (!findName[0]) {
            this.manager.push({
                name,
                data: new AddressBook()
            });
            console.log("Address Book Saved!");
        }
        else {
            console.log("Name already taken!");
        }
    }
    getAllAddressBook() {
        return this.manager;
    }
    getAddressBook(name) {
        const foundAddressBook = this.manager.filter(item => item.name === name);
        if (foundAddressBook) {
            return foundAddressBook[0];
        }
        else {
            console.log("No address book found with this name");
        }
    }
    searchPersonInACityOrState(personName, cityOrState) {
        const allContactsAccrossAddressBook = this.manager.flatMap(item => item.data.getAllContacts());
        // console.log(allContactsAccrossAddressBook)
        const foundPerson = allContactsAccrossAddressBook.filter(item => item.firstname === personName.toLowerCase() && (item.city === cityOrState || item.state === cityOrState));
        if (foundPerson.length !== 0) {
            console.log("Person found!");
            return foundPerson;
        }
        else {
            console.log("Person not found!");
        }
    }
    countByCityOrState(cityOrState) {
        const allContactsAccrossAddressBook = this.manager.flatMap(item => item.data.getAllContacts());
        const foundPerson = allContactsAccrossAddressBook.filter(item => item.city === cityOrState || item.state === cityOrState);
        return foundPerson.length;
    }
}
exports.AddressBookManager = AddressBookManager;
exports.default = AddressBook;
