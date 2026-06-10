"use client";

import { createContext, useContext } from "react";

export type Merk = {
  naam: string;
  kvk: string;
  logo: string | null; // data-URL
  primair: string;
  secundair: string;
  afbeeldingen: string[]; // data-URLs
};

export const standaardMerk: Merk = {
  naam: "",
  kvk: "",
  logo: null,
  primair: "#ff6600",
  secundair: "#91b3bf",
  afbeeldingen: [],
};

export const MerkContext = createContext<Merk>(standaardMerk);
export const useMerk = () => useContext(MerkContext);
