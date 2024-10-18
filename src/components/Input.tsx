function Input({ content, type, id, onChange}) {
  return (
    <div className="dataField">
      <label htmlFor="user">{content}</label>
      <input
        type={type}
        id={id}
        autoComplete="off"
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input