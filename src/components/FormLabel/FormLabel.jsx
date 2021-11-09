const FormLabel = ({ isFor, children }) => {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
      htmlFor={isFor}
    >
      {children}
    </label>
  );
};

export default FormLabel;
