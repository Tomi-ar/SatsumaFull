const SearchButton = props => {
  return (
  <button
    type={props.type || "button"}
    className={`${props.className}`}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
)};

export default SearchButton;
