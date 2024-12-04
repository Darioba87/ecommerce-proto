import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer has-background-link-light	">
      <div className="content has-text-centered">
        <p>
          <strong>My E-commerce</strong> by Dario Brito.
          <br />
          Built with React and Bulma.
        </p>
        <hr />
        <Link to={"/impressum"}>Impressum</Link>
      </div>
    </footer>
  );
}
