import logo from './logo.svg';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
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
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza 
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
      />
    </main>
  )
}

function Footer (){

  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  // if(hour >= openHour && hour <= closeHour){
  //   alert("We are open!!");
  // }else{
  //   alert("Sorry!! We are close");
  // }

  return <footer className='footer'> {new Date().toLocaleTimeString()} We are currently open</footer>
}

function Pizza(props){

  console.log(props);

  return (
    <div className='pizza'>
      <img src={props.photoName} alt='Pizza Focaccia'/>
      <div>
        <h3>{props.name}</h3>
        <p> {props.ingredients} </p>
      </div>
      <span> {props.price}Tk </span>
    </div>
  )
}

export default App;
