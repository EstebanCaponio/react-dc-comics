import Footer from "./components/Footer";
import Header from "./components/header"
import Jumbotron from "./components/jumbotron";
import Main from "./components/main";


const navBar = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

const footerNav = ["DIGITAL COMICS", "DC MERCHANDISE", "SUBSCRIPTION", "COMIC SHOP LOCATOR", "DC POWER VISA"];

function App() {


  return (
    <>
      <Header navBarMenu={navBar} />
      <Jumbotron />
      <Main />
      <Footer navBarFooter={footerNav} />
    </>
  )
}

export default App;