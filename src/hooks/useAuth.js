import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";


import { auth } from "../config/firebase";
import { useHistory } from "react-router";

const useAuth = () => {
  const [errors, setErrors] = useState();
  const history = useHistory();
  const signUpUser = (data) => {
    // Parse data to Redux Slice on validations met

    const { password, confirmPassword, email, firstName, lastName } = data;

    if (password !== confirmPassword) {
      setErrors("Passwords do not match!");
      return;
    }
    history.push(`/verify-account-email/id=${email}`);

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        // redirect to email verification page and listen for user change for when their verified
        sendEmailVerification(auth.currentUser)
          .then((res) => {
            history.push(`/verify-email`)
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  };

  const signInUser = (data) => {
    console.log(data);
    // signInWithEmailAndPassword(auth, data.email, data.password)
    //   .then((userCredential) => console.log(userCredential))
    //   .catch((error) => console.log(error.message));
  };
  return { signInUser, signUpUser };
};

export default useAuth;
