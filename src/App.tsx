import Logo from "./assets/CodeLab.svg"
import { Article, Container, Header, Navbar, Search } from "./components/"


const articles = [
  {
    "id": 1,
    "time": "2025-01-07T10:00:00Z",
    "title": "Exploring the Future of Artificial Intelligence",
    "description": "An in-depth analysis of how artificial intelligence is shaping the future, its practical applications, and the ethical challenges involved."
  },
  {
    "id": 2,
    "time": "2025-01-05T14:30:00Z",
    "title": "5 Tech Trends to Watch in 2025",
    "description": "Discover the most promising tech trends for this year and how they can impact our lives and careers."
  },
  {
    "id": 3,
    "time": "2024-12-20T09:15:00Z",
    "title": "The Complete Guide to Modern Web Development",
    "description": "Everything you need to know to become a modern web developer, from popular frameworks to best design practices."
  },
  {
    "id": 4,
    "time": "2024-11-15T18:45:00Z",
    "title": "The 5G Revolution: What to Expect?",
    "description": "A detailed look at how 5G technology is revolutionizing connectivity and what it means for consumers and businesses."
  },
  {
    "id": 5,
    "time": "2024-10-30T12:00:00Z",
    "title": "Cybersecurity: How to Protect Your Data Online",
    "description": "Essential tips and strategies to safeguard your personal and professional information in the digital environment."
  },
  {
    "id": 6,
    "time": "2024-09-22T16:20:00Z",
    "title": "Blockchain Beyond Cryptocurrencies",
    "description": "Exploring various applications of blockchain beyond the cryptocurrency market, including its use in industries like finance and supply chain."
  }
]

function App() {
  return (
    <>
      <Header>
        <Navbar redirect="/" logo={Logo} alt="codelab"/>
        <Search />
      </Header>
      <Container role="main">
      {articles.map((article) => (
          <Article
            key={article.id}
            time={article.time}
            title={article.title}
            description={article.description}
          />
        ))}
      </Container>
    </>
  )
}

export default App
