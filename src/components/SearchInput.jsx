/* eslint-disable react/prop-types */
function SearchInput({ handleSubmit, handleChange, query }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter city'
        value={query}
        onChange={handleChange}
        className="p-2"
      />
      <button type='submit' className="btn btn-outline-secondary mx-2">Get Weather</button>
    </form>
  );
}

export default SearchInput;
