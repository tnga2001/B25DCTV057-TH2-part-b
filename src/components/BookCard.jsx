export default function BookCard({ book, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <h3>{book.title}</h3>
      <p>Tác giả: {book.author}</p>
      <p>{book.genre} • {book.year}</p>
      <div className="actions">
        <button
          type="button"
          className={"fav-btn" + (isFavorite ? " active" : "")}
          onClick={() => onToggleFavorite(book.id)}
        >
          {isFavorite ? "♥ Đã thích" : "♡ Yêu thích"}
        </button>
      </div>
    </article>
  );
}
