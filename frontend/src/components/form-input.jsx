import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const FormInput = ({
  control,
  label,
  placeholder,
  name,
  disabled,
  autoFocus,
  wrapperClassName,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={wrapperClassName}>
          <FormLabel className="capitalize">{label || name}</FormLabel>
          <FormControl>
            <Input
              {...field}
              autoFocus={autoFocus}
              placeholder={placeholder}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
