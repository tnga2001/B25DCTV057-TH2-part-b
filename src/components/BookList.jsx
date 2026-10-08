import BookCard from "./BookCard.jsx";

export default function BookList({ books, favorites, onToggleFavorite }) {
  return (
    <div className="grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          isFavorite={favorites.includes(book.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
