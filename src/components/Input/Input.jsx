const Input = ({ type, showpassword, className, register }) => {
  // const { register } = useFormLocal();
  if (showpassword === true) {
    type = "text";
  }
  return (
    <>
      <input className={className} type={type} {...register} />
    </>
  );
};

export default Input;
