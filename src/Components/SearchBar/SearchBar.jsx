import { useState, useTransition } from "react";

function SearchBar({ movies, setMovies }) {
  const [search, setSearch] = useState("");
  const [isPending, startTransition] = useTransition();
 
  const handleSearch = (e) => {
    const value = e.target.value;

    // Urgent update
    setSearch(value);

    // Non-urgent update
    startTransition(() => {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      );

      setMovies(filtered);
    });
  };

  return (
    <>
      <input  type="text"
        placeholder="Search Movie..." value={search}
        onChange={handleSearch} />

        {isPending && <p style={{color:"white"}}>searching ..... </p>}
    </>
  );
}

export default SearchBar;