
import { useSearchParams } from "react-router";
import { Article, Container, Error, Header, Loading, Navbar, Pagination } from "./components/";
import { ScrollToTop } from "./components/ScrollToTop";
import { useGetArticles } from "./hooks/useArticles";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const perPage = 10;
  const { data: articles, isLoading, error } = useGetArticles(page, perPage);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
  };

  if (isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <Header role="group">
        <Navbar redirect="/" alt="codelab" />
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
          onPageChange={handlePageChange}
          isPrevDisabled={page === 1}
          isNextDisabled={articles && articles.length < perPage}
        />
      </Container>
      <ScrollToTop />
    </>
  );
}

export default App;