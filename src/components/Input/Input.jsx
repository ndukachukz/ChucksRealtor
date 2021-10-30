import { StyledInput } from "./style";

const Input = ({ type, placeholder, showpassword }) => {
  const showpass = showpassword;
  if (showpass === true) {
    type = "text";
  }
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      showpassword={showpassword}
    />
  );
};

export default Input;
