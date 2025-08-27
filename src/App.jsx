import "./App.css";
import Greeting from "./components/Greetings";
import Header from "./components/Header";
import {Tiriye} from "./components/Counter";
import ThemeToggle from "./components/ThemeSwitcher";
import Clicker from "./components/Clicker";
import  Inputer from "./components/Inputer";
import WelcomeMessage  from "./components/WelcomeMessage";
import Dashboard from "./components/Dashboard";
import Notification from "./components/Notification";


function App() {
  
  return (
    <>
    <ThemeToggle />
    <Header />
    <Notification hasNewMessages =  {true} />
    <Dashboard isLoggedIn = {false} />
    <Inputer />
    <Greeting name="Jawahir" Surname="Shariff" />
    <WelcomeMessage  isLoggedIn= {true}  />
    <Clicker />
    <Greeting name="Jawahir" Surname="Shariff" />
     <Tiriye />
    </>
  );
}

export default App;

