import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const FormRichTextEditor = ({
  control,
  name,
  label,
  placeholder,
  disabled,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="">
          <FormLabel className="capitalize">{label || name}</FormLabel>
          <FormControl>
            <ReactQuill
              theme="snow"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              readOnly={disabled}
              placeholder={placeholder}
              className="rounded-md overflow-hidden border shadow-sm"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormRichTextEditor;
