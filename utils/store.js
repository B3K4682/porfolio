import create from "zustand";

export const useStore = create((set) => ({
  setName: (name) => set({ name }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setMessage: (message) => set({ message }),
  name: "",
  email: "",
  phone: "",
  message: "",
}));