import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-in.styles.scss";
import SignUp from "../../components/sign-up-form/sign-up-form.components";

const SignIn = () => {
  useEffect(() => {
    const redirectResponse = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    };

    redirectResponse();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={logGoogleUser}>signInWithGooglePopup</button>
      <button onClick={signInWithGoogleRedirect}>
        signInWithGoogleRedirect
      </button>

      <SignUp />
    </>
  );
};

export default SignIn;
