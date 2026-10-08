import { useEffect, useState } from "react";
import books from "./data/books.js";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import GenreFilter from "./components/GenreFilter.jsx";
import BookList from "./components/BookList.jsx";
import Footer from "./components/Footer.jsx";

const genres = [...new Set(books.map((b) => b.genre))];

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Tất cả");
  const [favorites, setFavorites] = useState([]); // danh sách id yêu thích
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const shown =
    selectedGenre === "Tất cả" ? books : books.filter((b) => b.genre === selectedGenre);

  return (
    <>
      <Header
        favoriteCount={favorites.length}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      />
      <main>
        <Section title="Danh sách sách">
          <GenreFilter genres={genres} selected={selectedGenre} onSelect={setSelectedGenre} />
          <p id="status">Đang hiển thị {shown.length} / {books.length} cuốn</p>
          <BookList books={shown} favorites={favorites} onToggleFavorite={toggleFavorite} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
