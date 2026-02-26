import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>My Static Site</div>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/news" style={styles.link}>News</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#222",
    color: "#fff"
  },
  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none"
  },
  logo: {
    fontWeight: "bold"
  }
};