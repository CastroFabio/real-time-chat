const SearchBar = () => {
  return (
    <div className="search">
      <input
        id="q"
        type="search"
        placeholder="Pesquisar conversas"
        aria-label="Pesquisar conversas"
      />
    </div>
  );
};

export default SearchBar;
