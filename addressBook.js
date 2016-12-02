var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@gmail.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@gmail.com"
};

var contacts = [bob, mary];

var printPerson = function(person) {
    console.log(person.firstName + " " + person.lastName)
};

// begin list function for all contacts
function list() {
    var contactsLength = contacts.length; 
    for (i = 0; i < contacts.length; i++){
        printPerson(contacts[i]);
    }
};
list();
// end list function for all contacts

// begin search function for last name
function search(lastName){
var contactsLength = contacts.length;
for (var i = 0; i < contactsLength; i++) {
if(lastName == contacts[i].lastName) {
printPerson(contacts[i]);
}
else{
console.log("Nope");
    }
  }
};
search("Jones");
// end search function for last name

// begin function to add new contacts
function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
};

add("bob", "chang", 123456789, "bobChang@gmail.com");
list();
// end function to add new contacts













