// Your code here
class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  class Dog {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  class Bird {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }
  
    speak() {
      if (this.sex === 'male') {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  // Creating instances of each class
  let cat1 = new Cat("Whiskers", "female");
  let dog1 = new Dog("Rex", "male");
  let bird1 = new Bird("Polly", "female");
  let bird2 = new Bird("Jack", "male");
  
  console.log(cat1.speak()); // => "Whiskers says meow!"
  console.log(dog1.speak()); // => "Rex says woof!"
  console.log(bird1.speak()); // => "Polly says squawk!"
  console.log(bird2.speak()); // => "It's me! Jack, the parrot!"
  