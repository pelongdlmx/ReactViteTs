import { useEffect, useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Welcome } from "./pages/Welcome";

export default function App() {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState<string>("");
  const [errorMsgPass, setErrorMsgPass] = useState<string>("");
  const [logIn, setLogIn] = useState<boolean>(false);

  useEffect(() => {
    if (emailValue.trim() === "") {
      setErrorMsgEmail("Email is required");
    } else if (!emailValidation(emailValue)) {
      setErrorMsgEmail("Invalid email format");
    } else {
      setErrorMsgEmail("");
    }

    if (passwordValue.trim() === "") {
      setErrorMsgPass("Password missing");
    } else {
      setErrorMsgPass("");
    }

    setButtonDisabled(
      errorMsgEmail !== "" ||
        errorMsgPass !== "" ||
        !emailValue ||
        !passwordValue
    );
  }, [emailValue, passwordValue]);

  const logInHandler = () => {
    setLogIn(true);
  };
  const logOutHandler = () => {
    setLogIn(false);
  };

  const emailValidation = (email: string) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  };

  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handleOnChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2rem",
        width: "60%",
        margin: "auto",
      }}>
      <h1>Hello World from React + TypeScript! 🚀</h1>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
        }}>
        {logIn ? (
          <Welcome email={emailValue} logOut={logOutHandler} />
        ) : (
          <>
            <Input
              value={emailValue}
              onChange={handleOnChangeEmail}
              placeHolder="Email"
              type="email"
              errorMsg={errorMsgEmail}
            />
            <Input
              value={passwordValue}
              onChange={handleOnChangePass}
              placeHolder="Password"
              type="password"
              errorMsg={errorMsgPass}
            />

            <Button
              text="Log in"
              onClick={logInHandler}
              disabled={buttonDisabled}
            />
          </>
        )}
      </div>
    </div>
  );
}
