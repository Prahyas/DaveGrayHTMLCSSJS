class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
  }
  get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(crust) {
    this.crust = crust;
  }
  bake() {
    console.log(`Baking a ${this.size} ${this.crust} Pizza`);
  }
}

class SpecialityPizza extends Pizza {
  constructor(size, crust) {
    super(size, crust);
    this.month = "December";
  }
  specialPizza() {
    console.log(
      `This ${this.size} ${this.crust} pizza is only available in ${this.month}`
    );
  }
}

const specialPizzaObj = new SpecialityPizza("medium", "thin");
specialPizzaObj.specialPizza();
