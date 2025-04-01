import { useState } from "react"
import { Article, Container, Error, Header, Loading, Navbar, Pagination, Search } from "./components/"
import { ScrollToTop } from "./components/ScrollToTop"
import { useGetArticles } from "./hooks/useArticles"

function App() {
  const [page, setPage] = useState(1)
  const perPage = 10;
  const { data: articles, isLoading, error } = useGetArticles(page, perPage)

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
        <Pagination
          currentPage={page}
          onPageChange={setPage}
          isPrevDisabled={page === 1}
          isNextDisabled={articles && articles.length < perPage}
        />
      </Container>
      <ScrollToTop />
    </>
  )
}

export default App
