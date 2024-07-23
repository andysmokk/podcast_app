"use client";

import React, { createContext, useState } from "react";
import { AudioContextType, AudioProps } from "@/types";

const AudioContext = createContext<AudioContextType | undefined>(undefined);

const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [audio, setAudio] = useState<AudioProps | undefined>();
};
