import { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { auth } from "../../config/firebase";
import { sendEmailVerification, onAuthStateChanged } from "firebase/auth";

const VerifyEmail = () => {
  /* 
     
    
    ------------------------------------------------------------------------------------------
    
    if no param is available or no user(JWT, or Firebase CurrentUser) is found send then to error page    
    */

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    !params.id ?? history.push("/404");
    onAuthStateChanged(auth, (user) => {
      !user
        ? history.push("/signin")
        : sendEmailVerification(auth.currentUser)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => console.log(err));
    });
  }, []);

  return <div>Check your inbox or Spam for an email verification link </div>;
};

export default VerifyEmail;
