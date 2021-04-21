class Customer {
    // Konstruktor
    constructor(id) {
        this.id = id;
        // this.id = id;
    }
    // Methode mit Rückgabetyp
    loadOrders(bar) {
        this.foo = 'Hallo';
        setTimeout(() => {
            console.log('ID:', this.id);
        }, 2000);
        return true;
    }
}
const myC = new Customer(3);
myC.loadOrders('');
const myFn = function (param) { return param + 1; };
const myFnA = param => param + 1;
//# sourceMappingURL=main.js.map