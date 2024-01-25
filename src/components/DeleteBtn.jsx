function DeleteBtn() {
  return (
    <button
      className='btn btn-outline-danger btn-sm mt-2'
      onClick={() => console.log('delete button clicked')}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
