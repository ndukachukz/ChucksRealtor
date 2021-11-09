const SubmitForm = ({ children }) => {
  return (
    <div className="mt-8">
      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
        {children}
      </button>
    </div>
  );
};

export default SubmitForm;
