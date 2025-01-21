"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
class AddressBook {
    constructor() {
        this.addressBook = [];
    }
    getAllContacts() {
        return this.addressBook;
    }
    addContact(contact) {
        this.addressBook.push(contact);
        return "Contact added successfully";
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
}
exports.default = AddressBook;
