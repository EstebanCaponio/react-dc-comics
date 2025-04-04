import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./components/main"

const NavBar = ["CHARACTERS", "COMICS", "MOVIES", "TV", "GAMES", "COLLECTIBLES", "VIDEOS", "FANS", "NEWS", "SHOP"];

function App() {


  return (
    <>
      <Header NavBarMenu={NavBar} />
      <Main />
      <Footer />
    </>
  )
}

export default App