/* eslint-disable react/prop-types */

interface Props {
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleChange: (event: { target: { value: string } }) => void;
  query: string;
  inputRef: any;
}
function SearchForm({ handleSubmit, handleChange, query, inputRef }: Props) {
  return (
    <form onSubmit={handleSubmit} className='m-4'>
      <input
        ref={inputRef}
        type='text'
        placeholder='Enter city'
        value={query}
        onChange={handleChange}
        className='p-2 rounded'
      />
      <button type='submit' className='btn btn-outline-secondary mx-2'>
        Get Weather
      </button>
    </form>
  );
}

export default SearchForm;
