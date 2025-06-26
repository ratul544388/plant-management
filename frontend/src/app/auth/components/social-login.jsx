import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { FcGoogle } from "react-icons/fc";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  return (
    <>
      <div className="relative flex gap-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={async () => await signInWithPopup(auth, googleProvider)}
        >
          <FcGoogle className="size-5" />
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={async () => await signInWithPopup(auth, githubProvider)}
        >
          <FaGithub className="size-5" />
          Github
        </Button>
      </div>
      <div className="bg-border mt-5 mb-2 flex h-[1px] w-full items-center justify-center rounded-full">
        <span className="bg-background mb-1 px-2">or</span>
      </div>
    </>
  );
};

export default SocialLogin;
