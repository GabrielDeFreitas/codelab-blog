import Logo from "./assets/CodeLab.svg"
import { Article, Container, Header, Navbar, Search } from "./components/"
import { useGetArticles } from "./hooks/useArticles"
import { dateFormatter } from "./utils/data-formatter"


function App() {
  const { data: articles, isLoading, error } = useGetArticles()

  if (isLoading) return <p>loading...</p>
  if (error) return <p>error: {error.message}</p>

  return (
    <>
      <Header role="group">
        <Navbar redirect="/" logo={Logo} alt="codelab" />
        <Search />
      </Header>
      <Container role="main">
        {articles?.map((article) => (
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
