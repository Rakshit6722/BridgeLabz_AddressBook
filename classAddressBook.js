"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddressBook {
    constructor() {
        this.addressBook = [];
    }
    addContact(contact) {
        this.addressBook.push(contact);
        return "Contact added successfully";
    }
}
exports.default = AddressBook;
