import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

import { auth } from "@/firebase";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/validations";

import FormError from "@/components/form-error";
import FormInput from "@/components/form-input";
import FormPasswordInput from "@/components/form-password-input";
import FormWrapper from "@/components/form-wrapper";
import LoadingButton from "@/components/loading-button";
import SocialLogin from "../components/social-login";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      imageUrl: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (values) => {
      const { email, password, firstName, lastName, imageUrl } = values;
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: imageUrl,
      });
    },
    onSuccess: () => {
      toast.success("Register Successful");
      navigate("/");
    },
    onError: (error) => {
      if (error.message.includes("email-already")) {
        return setError("Email already exists!");
      }
      setError("Something went wrong!");
    },
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Create an Account"
      description="Fill in your details to get started"
    >
      <SocialLogin />
      <div className="flex gap-4">
        <FormInput
          control={form.control}
          name="firstName"
          label="First Name"
          autoFocus
          placeholder="Enter your first name"
          disabled={isPending}
          wrapperClassName="flex-1"
        />
        <FormInput
          control={form.control}
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          disabled={isPending}
          wrapperClassName="flex-1"
        />
      </div>
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
      <FormPasswordInput
        control={form.control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="imageUrl"
        label="Image Url"
        placeholder="Image URL (optional)"
        disabled={isPending}
      />
      <LoadingButton isLoading={isPending}>Register</LoadingButton>
      <div className={cn("text-center", isPending && "pointer-events-none opacity-60")}>
        Already have an account?{" "}
        <Link to="/auth/login" className="text-primary underline">
          Login
        </Link>
      </div>
      <FormError error={error} />
    </FormWrapper>
  );
};

export default Register;
