import Button from "./Button";
import { AiOutlineGithub } from 'react-icons/ai';

const SignInButton = () => {
  return (
    <div>
      <Button>
        <div className="flex gap-2">
          <AiOutlineGithub className="h-6 w-6 text-dark_slate_gray"/>
          <p>Sign In</p>
        </div></Button>
    </div>
  );
};

export default SignInButton;
