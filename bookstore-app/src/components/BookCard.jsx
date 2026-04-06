import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>₹{book.price}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}