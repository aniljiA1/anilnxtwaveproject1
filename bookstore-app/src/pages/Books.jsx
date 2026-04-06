import { useState } from "react";
import booksData from "../data/books";
import BookCard from "../components/BookCard";

export default function Books() {
  const [search, setSearch] = useState("");

  const filtered = booksData.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Books</h2>
      <input
        placeholder="Search books..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}