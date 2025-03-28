import Logo from "./assets/CodeLab.svg"
import { Article, Container, Header, Navbar, Search } from "./components/"
import { articles } from "./mock/articles"
import { dateFormatter } from "./utils/date"


function App() {
  return (
    <>
      <Header role="group">
        <Navbar redirect="/" logo={Logo} alt="codelab" />
        <Search />
      </Header>
      <Container role="group">
        {articles.map((article) => (
          <Article
            key={article.id}
            date={dateFormatter(article.date)}
            title={article.title}
            description={article.description}
          />
        ))}
      </Container>
    </>
  )
}

export default App
