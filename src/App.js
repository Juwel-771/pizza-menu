import logo from './logo.svg';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizza/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizza/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizza/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizza/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizza/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizza/prosciutto.jpg",
    soldOut: false,
  },
];



function App() {
  return (
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer />
    </div>
  );
}

function Header (){

  const style = {}

  return (
    <header className='header'>
        <h1>Fast React React CO.</h1>
    </header>
  )
}

function Menu (){

  const pizzas = pizzaData;
  // const pizzas = [];
  const pizzaAvailable = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {/* <Pizza 
        name = "Focaccia" 
        ingredients = "Bread with italian olive oil and rosemary" 
        photoName = 'pizza/focaccia.jpg'
        price = {10}
      />
      <Pizza
        name = "Pizza Funghi"
        ingredients = "Tomato, Mushrooms"
        photoName = "pizza/funghi.jpg"
        price = {20} 
      /> */}

      {
        pizzaAvailable > 0 ? (
          <ul className='pizzas'>
            {
              pizzaData.map(pizza => <Pizza key = {pizza.name} pizzaObj = {pizza}></Pizza>)
            }
          </ul>
        ) : <p>We still working our menu</p>
      }

      
    </main>
  )
}

function Footer (){

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour <= openHour && hour <=closeHour;
  // if(hour >= openHour && hour <= closeHour){
  //   alert("We are open!!");
  // }else{
  //   alert("Sorry!! We are close");
  // }

  return (
    <footer className='footer'> 
      {
        isOpen ? (
          <div className='order'>
            <p>We are open till {closeHour}. Come and order fast </p>
            <button className='btn'>Order</button>
          </div>
        ) : (<p>We are happy to serve you</p>)
      }
      </footer>
  )
}

function Pizza({pizzaObj}){

  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : " " }`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.photoName}/>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients} </p>
      </div>
      <span> { pizzaObj.soldOut ? "Sold Out" : pizzaObj.price } </span>
    </div>
  )
}

export default App;
