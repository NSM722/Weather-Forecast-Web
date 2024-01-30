/* eslint-disable react/prop-types */

interface Props {
  error: string | null;
}
function ErrorMessage({ error }: Props) {
  return <p className='error-message text-danger fw-bolder'>{error}</p>;
}

export default ErrorMessage;
