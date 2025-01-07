import Logo from "./assets/CodeLab.svg"
import { Article } from "./components/Article"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Search } from "./components/Search"

function App() {
  return (
    <>
      <Header>
        <Navbar redirect="/" logo={Logo} alt="codelab"/>
        <Search />
      </Header>
      <Container role="main">
        <Article />
        <Article />
      </Container>
    </>
  )
}

export default App
