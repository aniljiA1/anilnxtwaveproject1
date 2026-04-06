import { useParams } from "react-router-dom";
import books from "../data/books";
import { useCart } from "../context/CartContext";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);
  const { addToCart } = useCart();

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
}