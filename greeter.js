function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "K", lastName: "G" };
document.body.textContent = greeter(user);
