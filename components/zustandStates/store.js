import create from "zustand";

const useStore = create((set) => ({
  admin: false,
  link: "http://localhost:3009",
  votedVP:true,
  votedTreasurer:true,
  addAdmin: (admin) => set((state) => ({ admin: admin })),
  addLink: (link) => set((state) => ({ link: link })),
  addVotedVP: (votedVP) => set((state) => ({ votedVP: votedVP })),
  addVotedTreasurer: (votedTreasurer) => set((state) => ({ votedTreasurer: votedTreasurer })),
}));
export default useStore;
