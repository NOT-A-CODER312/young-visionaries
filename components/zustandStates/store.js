import create from "zustand";

const useStore = create((set) => ({
  admin: false,
  votedVp: true,
  votedTreasurer: true,
  link: "http://localhost:3009",
  charityList: [],
  uniSwitch: true,
  addAdmin: (admin) => set((state) => ({ admin: admin })),
  addLink: (link) => set((state) => ({ link: link })),
  addVotedVp: (votedVp) => set((state) => ({ votedVp: votedVp })),
  addUniSwitch: (uniSwitch) => set((state) => ({ uniSwitch: uniSwitch })),
  addCharityList: (charityList) =>
    set((state) => ({ charityList: charityList })),
  addVotedTreasurer: (votedTreasurer) =>
    set((state) => ({ votedTreasurer: votedTreasurer })),
  votedVP: true,
  votedTreasurer: true,
  addAdmin: (admin) => set((state) => ({ admin: admin })),
  addLink: (link) => set((state) => ({ link: link })),
  addVotedVP: (votedVP) => set((state) => ({ votedVP: votedVP })),
  addVotedTreasurer: (votedTreasurer) =>
    set((state) => ({ votedTreasurer: votedTreasurer })),
}));
export default useStore;
