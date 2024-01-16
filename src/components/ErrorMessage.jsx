/* eslint-disable react/prop-types */
function ErrorMessage({ error }) {
  return (
    <p className="error-message text-danger fw-bolder">{error}</p>
  )
}

export default ErrorMessage
