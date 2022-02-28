//Fonksiyonlar

//1 parametresiz fonksiyon

function greet() {
    console.log("Hi !!");
  }
  
  greet();
  
  //2 Parametreli fonksiyon
  
  function greetPeople(namePeople) {
    console.log("Hi " + namePeople);
  }
  
  greetPeople("Ali");
  greetPeople(true);
  greetPeople(20);
  greetPeople(null);
  
  //2 parametreli fonksiyon yazimi Ali 42
  
  function kisi(name, yas) {
    console.log(name + yas);
  }
  
  kisi("Ali ", 42);
  
  //3 parametreli fonksiyon
  
  function information(location, price, rating) {
    console.log(location + " " + price + " " + rating);
  }
  
  information("Leipzig", 70, "5 stars");
  