
// // console.log("Hello World")
// // alert("Uwaga");

// // ZMIENNE:var,const,let

// // console.log(nazwaZmiennej);

// // var nazwaZmiennej ="wartość zmiennej";
// // var firstname ="Jan";
// // var lastname ="Kowalski";
// // var lastname="Smith"
// // console.log(lastname)

// // let
// // let age = 25;
// // console.log(age);
// // console.log(age);

// // const
// // const firstname="Jan";
// // console.log(firstname);
// //TYPY PROSTE/PRYMITYWNE: String, number, boolean,undyfined
// // Nan,null

// //zmienna const o typie danych string
// const firstname= "Jan";
// //zmienna let o typie danych string
// let city="Rzeszów"
// // zmienna const o typie danych number
// const num =19.54;

// console.log(num.toFixed())
// //konkatenacja```

// //pobieranie elementu z DOM (document object mosel)
// const title=document.getElementById("Title")
// title.textContent="Hello World";
// title.style.color="red";
// // title.classList.add("testowa");
// title.setAttribute("class","btn btn-danger");

// console.log(title);
// // Query Selector
// const desc =document.guerySelector(".desc")
// console.log(desc)

// const items=document.querySelectiorAll(".item");
// console.log(items);

// const name =document.getElementById("Name");
// const city =document.getElementById("City");
// const color=document.getElementById("Color");
// const animal=document.getElementById("Animal");

// name.textContent="Agnieszka";
// city.textContent="Mysłowice";
// color.textContent="blue";
// animal.textContent="Kot";


// console.log(name);
// console.log(city);
// console.log(color);
// console.log(animal);
// //tworzenie elementu
// const btn =document.createElement("button");
// btn.textContent="Kup teraz";
// btn.classList.add("przycisk");
// //przyłaczenie elementu w przypadku dla body
// document.body.appendChild(btn);
// console.log(btn);


const wrapper=document.getElementById("Product");
// console.log(wrapper) tymczasowo do sprawdzenia czy działa

const card=document.createElement("div");

const cardTitle = document.createElement("h2");
cardTitle.classList.add("klasa1");
cardTitle.textContent="Buty zimowe";

const cardPrice = document.createElement("p");
// cardPrice.classList.add("");
cardPrice.textContent="Cena: 167 zł";

const cardButton=document.createElement("button");
cardButton.classList.add("przycisk");
cardButton.textContent="Kup teraz";




// card.innerHTML  =
// `
// <h2> Buty zimowe</h2>
// <p> Cena: 167 zł</p>
// <button class="przycisk"> Kup teraz</button>

// `;

card.appendChild(cardTitle);
card.appendChild(cardPrice);
card.appendChild(cardButton)
wrapper.appendChild(card)
// console.log(card);