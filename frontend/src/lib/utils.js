import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getFormattedName = ({ fullName, firstName, lastName }) => {
  if (fullName) {
    const [first, last] = fullName.trim().split(" ");
    return {
      fullName: last ? `${first} ${last}` : first,
      firstName: first,
      lastName: last || null,
    };
  }

  if (firstName) {
    return {
      fullName: lastName ? `${firstName} ${lastName}` : firstName,
      firstName,
      lastName: lastName || null,
    };
  }

  return {
    fullName: "",
    firstName: "",
    lastName: null,
  };
};

export const redirect = (currentUser, url, param) => {
  return currentUser ? url : `${url}?redirect=${param}`;
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/--+/g, "-")
    .replace(/^-+|-+$/g, "");
};
