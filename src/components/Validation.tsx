function ValidationMessage({ message, isInvalid }) {
  return <p className={isInvalid ? "validation" : "offscreen"}>{message}</p>;
}

export default ValidationMessage
