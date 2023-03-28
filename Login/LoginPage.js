import LoginSignUp from "./components/logIn";

function LoginPage(props) {
  return <LoginSignUp logInSignIn={props.isLoggedIn} />;
}
export default LoginPage;
