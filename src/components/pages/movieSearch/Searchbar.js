
export const Searchbar = ({ handleSubmit }) => {
  return (
    
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="Search movies"
        ></input>
      </form>
    
  );
};
