import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

const useAuthStore = create((set) => ({
  currentUser: null,
  loading: true,

  setCurrentUser: (user) => set({ currentUser: user }),
  setLoading: (loading) => set({ loading }),
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setCurrentUser(user);
  useAuthStore.getState().setLoading(false);
});

export default useAuthStore;
