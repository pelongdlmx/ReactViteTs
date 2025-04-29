import { Button } from "../components/Button";

type WelcomeProps = {
  email: string;
  logOut: () => void;
};

export function Welcome({ email, logOut }: WelcomeProps) {
  return (
    <>
      <div>
        <p>Welcome {email} You are logged in.</p>
      </div>
      <div>
        <Button text="Log out" onClick={logOut} />
      </div>
    </>
  );
}
