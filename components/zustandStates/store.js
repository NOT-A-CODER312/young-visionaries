import create from "zustand";

const useStore = create((set) => ({
  admin: false,
  votedVp: true,
  votedTreasurer: true,
  link: "http://localhost:3009",
  addAdmin: (admin) => set((state) => ({ admin: admin })),
  addLink: (link) => set((state) => ({ link: link })),
  addVotedVp: (votedVp) => set((state) => ({ votedVp: votedVp })),
  addVotedTreasurer: (votedTreasurer) =>
    set((state) => ({ votedTreasurer: votedTreasurer })),
}));
export default useStore;
