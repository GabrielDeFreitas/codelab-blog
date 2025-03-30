import { Article, Container, Error, Header, Loading, Navbar, Search } from "./components/"
import { useGetArticles } from "./hooks/useArticles"
import { dateFormatter } from "./utils/data-formatter"


function App() {
  const { data: articles, isLoading, error } = useGetArticles()

  if (isLoading) return <Loading />
  if (error) return <Error menssage={error.message} />

  return (
    <>
      <Header role="group">
        <Navbar redirect="/" alt="codelab" />
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
