export default function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My Static React Website</h1>
      <p>
        This is a sample homepage containing static content.
        It demonstrates navigation between pages in a React static website.
      </p>

      <h2>About This Project</h2>
      <p>
        - 15 News Articles  
        - Lazy Loading on News Page  
        - Individual Article Pages  
        - Built using React Router  
      </p>

      <p>
        Click on the <strong>News</strong> section in the navigation bar to
        explore articles.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    lineHeight: "1.6"
  }
};