const dog = {
    nameDog: "Szama",
    speed: 500,
    showText() {
        return `Twój pies to ${this.nameDog}`
    }
}

console.log(dog["nameDog"])
console.log(dog.nameDog)
console.log(dog["showText"]())

//Ale też jeżeli pod klucze podstawiamy wartości z jakiś zmiennych, których nazwy są takie same jak danych kluczy, możemy taki zapis skrócić:
// const name = "Tname";
// const speed = 555;
// const dogT = {
//     name,
//     speed,
//     showText() {
//         return `Twój pies to ${this.name}`
//     }
// }
// console.log(dog.showText());
// console.log(dogT.showText());
// console.log(dogT.name);



// Lepszy przykład

// const tab = [];
// const name = "Szama";
// const speed = 1000;

//zamiast

// const ob = {
//     name,
//     speed
// }
// tab.push(ob);

//mogę

// tab.push({
//     name: name,
//     speed: speed
// });

//lub jeszcze lepiej

// tab.push({ name, speed });
// console.log(tab)

// Destrukturyzacja obiektów

// const object = {
//     name: "Jan",
//     surname: "Kowalski",
//     age: 18
// }

// Dodawanie do obiektu:
// object.legs = 2;

// console.log(object.surname)

// Lepszy sposób

// const { name, surname, age } = object;
// console.log(name)










//ES5
// const obj = {
//     name: "Karol",
//     surname: "Nowak"
// }
// obj["my pet"] = "Pies";
// obj["eat food"] = function () {
//     return "Lubię jeść jabłka";
// }

//ES6
// const obj = {
//     name: "Karol",
//     surname: "Nowak"
//     ["my pet"] : "Pies",
//     ["eat food"]() {
//         return "Lubię jeść jabłka";
//     }
// }

// obj["my pet"] //"Pies"
// obj["eat food"]() //"Lubię jeść jabłka"

// function show() {
//     console.log(`${this.brand} koloru ${this.color}`);
// }

// const car1 = {
//     brand: "Mercedes",
//     color: "czerwony",
//     showText: show
// }

// const car2 = {
//     brand: "BMW",
//     color: "czarny",
//     showText: show
// }

// car1.showText(); //"Mercedes koloru czerwony"
// car2.showText(); //"BMW koloru czarny"


// USUWANIE OBIEKTU

// const car = {
//     brand: "Mercedes",
//     color: "czerwony",
//     showText() {
//         console.log(`${this.brand} koloru ${this.color}`);
//     }
// }

// console.log(car.color); //czerwony
// delete car.color;
// console.log(car.color); //undefined


// Pętla w obiekcie

// const car = {
//     brand: "Mercedes",
//     color: "czerwony",
//     showText() {
//         console.log("Super auto!!")
//     }
// }

// for (const key in car) {
//     console.log(key); //brand, color, showText
// }

// Jak widzisz robiąc iteracje pod zmienną key podstawiane są kolejne klucze. Aby pobrać ich wartość zastosujemy kwadratowe nawiasy:

// for (const key in car) {
//     console.log("Klucz: ", key);
//     console.log("Wartość: ", car[key]);
// }