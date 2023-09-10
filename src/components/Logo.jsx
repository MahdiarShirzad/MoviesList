import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Movies List</h1>
      </div>
    </Link>
  );
}
