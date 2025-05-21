import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

import FormWrapper from "@/components/form-wrapper";
import FormPasswordInput from "@/components/form-password-input";
import FormError from "@/components/form-error";
import LoadingButton from "@/components/loading-button";

const formSchema = z
  .object({
    currentPassword: z.string().min(6, {
      message: "Current password must be at least 6 characters",
    }),
    newPassword: z.string().min(6, {
      message: "New password must be at least 6 characters",
    }),
    confirmNewPassword: z.string().min(6, {
      message: "Please confirm your new password",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

const ChangePasswordForm = () => {
  const [error, setError] = useState("");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      toast.success("This feature will be added soon");
    },
    onSuccess: () => {
      toast.success("Password updated successfully");
      form.reset();
    },
    onError: (err) => {
      setError(err?.message || "Something went wrong");
    },
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutateAsync}
      title="Change Password"
      description="Update your password below"
    >
      <FormPasswordInput
        control={form.control}
        name="currentPassword"
        placeholder="Enter current password"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="newPassword"
        placeholder="Enter new password"
        disabled={isPending}
      />
      <FormPasswordInput
        control={form.control}
        name="confirmNewPassword"
        placeholder="Confirm new password"
        disabled={isPending}
      />
      <LoadingButton>Update Password</LoadingButton>
      <FormError error={error} />
    </FormWrapper>
  );
};

export default ChangePasswordForm;
