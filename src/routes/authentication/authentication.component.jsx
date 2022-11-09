import SignUp from "../../components/sign-up-form/sign-up-form.components";
import SignIn from "../../components/sign-in-form/sign-in-form.components";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
