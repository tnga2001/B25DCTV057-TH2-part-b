export default function GenreFilter({ genres, selected, onSelect }) {
  const all = ["Tất cả", ...genres];
  return (
    <div className="genre-bar">
      {all.map((g) => (
        <button
          key={g}
          type="button"
          className={selected === g ? "active" : ""}
          onClick={() => onSelect(g)}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
