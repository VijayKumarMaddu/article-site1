import articles from "../data/articles";
import LazyLoadList from "../components/LazyLoadList";

export default function News() {
  return (
    <div style={styles.container}>
      <h1>Latest News</h1>
      <LazyLoadList articles={articles} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px"
  }
};