export default function Header({ favoriteCount, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <h1>📚 Thư viện của lớp</h1>
      <div className="header-right">
        <span>Yêu thích: <strong>{favoriteCount}</strong></span>
        <button type="button" onClick={onToggleTheme}>
          {theme === "dark" ? "☀️ Sáng" : "🌙 Tối"}
        </button>
      </div>
    </header>
  );
}
