import { Article, Container, Error, Header, Loading, Navbar, Pagination, Search } from "./components/"
import { useGetArticles } from "./hooks/useArticles"

function App() {
  const { data: articles, isLoading, error } = useGetArticles()

  if (isLoading) return <Loading />
  if (error) return <Error message={error.message} />

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
            date={article.readable_publish_date}
            title={article.title}
            description={article.description}
            url={article.url}
          />
        ))}
        <Pagination />
      </Container>
    </>
  )
}

export default App
