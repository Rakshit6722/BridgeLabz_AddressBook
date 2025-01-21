"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const classAddressBook_1 = __importDefault(require("./classAddressBook"));
//UC1 - ability to create a new contact
const createContact = () => {
    const firstname = readline_sync_1.default.question("Enter firstname: ");
    const lastname = readline_sync_1.default.question("Enter lastname: ");
    const address = readline_sync_1.default.question("Enter address: ");
    const city = readline_sync_1.default.question("Enter city: ");
    const state = readline_sync_1.default.question("Enter state: ");
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
    const name = readline_sync_1.default.question("Find contact by entering first name");
    return name;
};
const addressBook = () => {
    let address_book = new classAddressBook_1.default();
    console.log("<-------------ADDRESS BOOK--------------->");
    while (true) {
        console.log("Operations:");
        let opertaionsStr = `1: Add Contact \n2: Edit Contact \n3: Exit`;
        console.log(opertaionsStr);
        const operation = parseInt(readline_sync_1.default.question("Choose:"));
        switch (operation) {
            case 1:
                address_book.addContact(createContact());
                break;
            case 2:
                address_book.editContact(editUsingName());
                console.log(address_book.getAllContacts());
                break;
            case 3:
                console.log("Exiting...");
                return;
            default:
        }
    }
};
addressBook();
