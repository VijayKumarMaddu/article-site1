import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div style={styles.card}>
      <h2>{article.title}</h2>
      <p style={styles.date}>{article.date}</p>
      <Link to={`/article/${article.id}`}>Read More</Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px"
  },
  date: {
    color: "gray",
    fontSize: "14px"
  }
};