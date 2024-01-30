/* eslint-disable react/prop-types */
function DeleteBtn({ handleDelete }) {
  return (
    <button
      className='btn btn-outline-danger btn-sm mt-2'
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
