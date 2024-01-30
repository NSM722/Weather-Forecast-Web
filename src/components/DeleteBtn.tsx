/* eslint-disable react/prop-types */

interface Props {
  handleDelete: () => void;
}

function DeleteBtn({ handleDelete }: Props) {
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
