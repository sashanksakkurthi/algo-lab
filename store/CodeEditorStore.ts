import create from "zustand";
import { Language } from "../data/CodeEditorData";

type State = {
  stdin: string;
  language: { id: number; name: string; language: string };
  stdout: string;
  sourceCode: string;
  setStdin: (stdin: string) => void;
  setLanguage: (id: number, name: string, language: string) => void;
  setStdout: (stdout: string) => void;
  setSourceCode: (sourceCode: string) => void;
};

export const useCodeEditorStore = create<State>((set) => ({
  stdin: "",
  language: Language[0],
  stdout: "",
  sourceCode: "",
  setStdin: (stdin: string) => set({ stdin }),
  setLanguage: (id, name, language) =>
    set({ language: { id: id, name: name, language: language } }),
  setStdout: (stdout: string) => set({ stdout }),
  setSourceCode: (sourceCode: string) => set({ sourceCode }),
}));
