class Car {
    
    constructor(engine, doors, color, year) {
        this.engine = engine;
        this.doors = doors;
        this.color = color;
        this.year = year;
      }
    
    signal(){
        console.log('Beep-Beep');
    }
}

let car = new Car('Gasoline', '4', 'blue', '2023');
console.log(car.signal());


class Truck extends Car {
    constructor(engine, doors, color, year, cargo) {
      super(engine, doors, color, year);
      this.cargo = cargo;
    }
  
    soundTruck() {
      super.signal();
      console.log('Brr-Brr');
    }
  
    start() {
      console.log('Starting the truck...' + soundTruck());
    }
}

let truck = new Truck();
truck.start();



