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

    public addressBook: Contact[]

    constructor(){
        this.addressBook = []
    }

    addContact(contact: Contact): string{
        this.addressBook.push(contact)
        return "Contact added successfully"
    }
}

export default AddressBook