const cardTitle=document.querySelector("h1");
const cardSubtitle=document.querySelector("h3")
// cardTitle.textContent=("Dzień dobry");
cardSubtitle.textContent=("Cześć Janek");

// {/* <article class="best-card">
//                 <img src="https://i.pravatar.cc/150?img=7" alt="">
//                 <h3 class="card-name">John Smith</h3>
//                 <button class="card-btn">
//                     <i class="bi bi-person-plus-fill">Follow</i>
//                 </button>
//                 <p class="card-desc">Some quick example text to build on the card title and make up the bulk of the.</p>
//             </article> */}



//best workers
const workersWrapper=document.getElementById("Workers")

function createWorkerCard(zdjęcie,imię,tekst){
    const card=document.createElement("article");
    card.setAttribute("class","best-card");
    const image=document.createElement("img");
    image.src=zdjęcie;
    image.alt=`Zdjęcie użytkownika${imię}`;
    card.appendChild(image);

    const title= document.createElement("h3");
    title.classList.add("card-name");
    title.textContent=imię;
    card.appendChild(title);

    const btn=document.createElement("button");
    btn.classList.add("card-btn");
    btn.innerHTML=`<i class="bi bi-person-plus-fill"></i>Follow`
    card.appendChild(btn);

    const p=document.createElement("p");
    p.classList.add("card-desc");
    p.textContent=tekst;
    card.appendChild(p)

    workersWrapper.appendChild(card);
}
createWorkerCard("https://i.pravatar.cc/150?img=7","John Smith","Some quick example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=9","Anna Nowak","Quick example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=12","Jan Kowalski","Example text to build on the card title and make up the bulk of the.");
createWorkerCard("https://i.pravatar.cc/150?img=43","Emilia Wróbel","Text to build on the card title and make up the bulk of the.");

// this w funkcji strzalkowej

// {/* <article class="pricing-card">
//                     <div class="text-top">
//                         <i class="bi bi-currency-dollar"></i>
//                         <span class="cena">19</span>
//                             <span class="month">/month</span>
//                     </div>

//                     <p>Best for higher volume businesses that need additional features and power.</p>
//                     <strong>Full Support</strong> No</br>
//                         <strong>Storage</strong>50 GB</br>
//                         <strong>Monthly Visitors</strong> 400k</p>
//                         <button>Buy now</button> */}


  
const pricingWrapper=document.getElementById("cennik")
  const createPrice=()=>{
    const card=document.createElement("article");
    card.classList.add("pricing-card");

    card.innerHTML=`
  <article class="pricing-card">
                        <div class="text-top">
                            <i class="bi bi-currency-dollar"></i>
                            <span class="cena">19</span>
                            <span class="month">/month</span>
                        </div>

                        <p>Best for higher volume businesses that need additional features and power.</p>
                        <strong>Full Support</strong> No</br>
                        <strong>Storage</strong>50 GB</br>
                        <strong>Monthly Visitors</strong> 400k</p>
                        <button>Buy now</button>

  `
 pricingWrapper.appendChild(card)
                        
  }
  createPrice();
  createPrice();
  createPrice();
  createPrice()


  // const isAdmin = true;
  // const isLogged = false;

  // if(isAdmin===true){
  //   console.log("Witamy w panelu admina");
  // }
  // else{
  //   console.log("Brak dostępu;")
  
  // }

  const num =7;
  //=== porównuje wartość i typ
  // == porównuje tylko wartość
  //= to przypisanie nie porównaie!
  if(num===7){
    console.log("Liczba to 7")
  }

  const num2 = 9;
  //> większe od
  //>= równe lub większe

  if(num2>5){
    console.log("Liczba jest większa od 5")

  }
  else if(num2 ===5) {
    console.log("Liczba równa 5")
  }
  else if (num2<5){
    console.log("Liczba mniejsza od 5")

  }
  else{
    console.log("WYSTĄPIŁ BŁĄD!")
  }
const isAdmin = true;
const isModerator = false;
const isUser = false;
const isLogged = true;
//|| lub
// && i
if(isAdmin === true || isModerator === true){
  console.log("Witamy w panelu administracji") 
  
    console.log("Panel użytkownika")
  
}


const showGreeting = ()=>{
  const title=document.getElementById("Greeting");
  const date=new Date();
  const hour= date.getHours();
  // console.log(date.getHours());
  if(hour < 12 && hour >=6){
    title.textContent="Good Morning";
  }
  else if(hour >= 12 && hour < 18){
    title.textContent="Good Afternoon";
  }
  else{
    title.textContent="Good Evening"
  }
}
showGreeting();

const btn=document.getElementById("btn");
const showCreate =()=>{

  const title=document.getElementById("Create");
  
  title.textContent="Witam";
}
btn.addEventListener("click",showCreate);

const menu=document.getElementById("Menu");
const hamburgerBtn=document.getElementById("HamburgerBtn");


const showMenu=()=>{
  menu.classList.add("showMenu")
}

  hamburgerBtn.addEventListener("click",showMenu)
