import { toast } from "sonner";

export function handleFormError(form, error) {
  const serverData = error?.response?.data;
  const message =
    serverData?.message ?? error?.message ?? "Something went wrong";
  const field = serverData?.field ?? error?.field;

  if (field) {
    form.setError("field", { message });
    const input = document.querySelector(`input[name="${field}"]`);
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        input.focus();
      }, 300);
    }
  } else {
    toast.error("Something went wrong");
  }
}
