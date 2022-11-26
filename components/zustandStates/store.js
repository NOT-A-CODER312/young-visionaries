import create from "zustand";

const useStore = create((set) => ({
  admin: false,
  link: "http://localhost:3009",
  addAdmin: (admin) => set((state) => ({ admin: admin })),
  addLink: (link) => set((state) => ({ link: link })),
}));
export default useStore;
