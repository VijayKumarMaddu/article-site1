import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";

export default function ArticlePage() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) return <h2>Article Not Found</h2>;

  return (
    <div style={styles.container}>
      <h1>{article.title}</h1>
      <p style={styles.date}>{article.date}</p>
      <div style={styles.content}>{article.content}</div>
      <br />
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px"
  },
  date: {
    color: "gray"
  },
  content: {
    whiteSpace: "pre-line",
    marginTop: "20px",
    lineHeight: "1.6"
  }
};