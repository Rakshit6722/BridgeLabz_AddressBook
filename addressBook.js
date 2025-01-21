"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const classAddressBook_1 = __importDefault(require("./classAddressBook"));
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
const addressBook = () => {
    let address_book = new classAddressBook_1.default();
    console.log("<-------------ADDRESS BOOK--------------->");
    console.log("Operations:");
    console.log("1: Add Contact");
    const operation = parseInt(readline_sync_1.default.question("Choose:"));
};
addressBook();
