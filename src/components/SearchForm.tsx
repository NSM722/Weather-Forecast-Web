/* eslint-disable react/prop-types */

interface Props {
  handleSubmit: (event: { preventDefault: () => void }) => void;
  handleChange: (event: { target: { value: string } }) => void;
  query: string;
}
function SearchForm({ handleSubmit, handleChange, query }: Props) {
  return (
    <form onSubmit={handleSubmit} className='m-4'>
      <input
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
