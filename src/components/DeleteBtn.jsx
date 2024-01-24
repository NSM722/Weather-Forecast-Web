function DeleteBtn() {
  return (
    <button
      className='btn btn-outline-danger'
      onClick={() => console.log('delete button clicked')}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
