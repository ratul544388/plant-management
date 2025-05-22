import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { auth } from "@/firebase";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/validations";

import FormInput from "@/components/form-input";
import FormPasswordInput from "@/components/form-password-input";
import FormWrapper from "@/components/form-wrapper";
import LoadingButton from "@/components/loading-button";
import OAuthLogin from "./_components/o-auth-login";

const Login = () => {
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values) => {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
    },
    onSuccess: () => {
      toast.success("Login Successful");
      navigate("/"); // Or redirect to the page user came from, if you handle that logic
    },
    onError: (error) => {
      if (error.message.includes("credential")) {
        return toast.error("Invalid Credentials")
      };
      toast.error("Something went wrong");
    },
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Login to Your Account"
      description="Enter your email and password to login"
    >
      <OAuthLogin />
      <FormInput
        control={form.control}
        name="email"
        placeholder="Enter your email"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="password"
        placeholder="Enter your password"
        disabled={isPending}
      />
      <LoadingButton isLoading={isPending}>Login</LoadingButton>
      <div
        className={cn(
          "text-center",
          isPending && "pointer-events-none opacity-60",
        )}
      >
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-primary underline">
          Register
        </Link>
      </div>
    </FormWrapper>
  );
};

export default Login;
