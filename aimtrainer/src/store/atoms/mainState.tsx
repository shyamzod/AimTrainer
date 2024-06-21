import { atom } from "recoil";

export const timeLimit = atom({
  key: "timeLimit",
  default: 10,
});

export const TargetSize = atom({
  key: "TargetSize",
  default: 80,
});

export const TargetNature = atom({
  key: "TargetNature",
  default: "dynamic",
});
