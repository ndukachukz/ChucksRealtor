import { useState } from "react";

const useToggle = () => {
  // togglePassWordView
  const [view, setView] = useState(false);
  // Toggle Navbar view
  const [open, setopen] = useState(false);

  const toggleView = (e) => {
    e.preventDefault();
    setView(!view);
    // console.log(view);
  };

  const toggleNavbar = () => {
    setopen(!open);
    // console.log(open);
  };

  return { toggleView, view, toggleNavbar, open };
};

export default useToggle;
