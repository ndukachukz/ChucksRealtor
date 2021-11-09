import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <Link
        class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
        to="/"
      >
        Brand
      </Link>
    </div>
  );
};

export default Brand;
