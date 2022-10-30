import create from "zustand";
import { Language } from "../data/CodeEditorData";

type CodeEditorStore = {
  sourceCode: string;
  compilerLanguage: { id: number; name: string; language: string };
  customInput: string;
  outputDetails: {
    stdout: string;
    time: number;
    memory: number;
    stderr: string;
    token: string;
    compile_output: string;
    message: string;
    status: { id: number; description: string };
  };
  setSourceCode: (sourceCode: string) => void;
  setCompilerLanguage: (compilerLanguage: {
    id: number;
    name: string;
    language: string;
  }) => void;
  setCustomInput: (customInput: string) => void;
  setOutputDetails: ({
    stdout,
    time,
    memory,
    stderr,
    token,
    compile_output,
    message,
    status: { id, description },
  }: {
    stdout: string;
    time: number;
    memory: number;
    stderr: string;
    token: string;
    compile_output: string;
    message: string;
    status: { id: number; description: string };
  }) => void;
};

export const useCodeEditorStore = create<CodeEditorStore>((set) => ({
  sourceCode: "",
  compilerLanguage: Language[0],
  customInput: "",
  outputDetails: {
    stdout: "",
    time: 0,
    memory: 0,
    stderr: "",
    token: "",
    compile_output: "",
    message: "",
    status: { id: 0, description: "" },
  },
  setSourceCode: (sourceCode: string) => set({ sourceCode }),
  setCompilerLanguage: (compilerLanguage: {
    id: number;
    name: string;
    language: string;
  }) => set({ compilerLanguage }),
  setCustomInput: (customInput: string) => set({ customInput }),
  setOutputDetails: ({
    stdout,
    time,
    memory,
    stderr,
    token,
    compile_output,
    message,
    status: { id, description },
  }: {
    stdout: string;
    time: number;
    memory: number;
    stderr: string;
    token: string;
    compile_output: string;
    message: string;
    status: { id: number; description: string };
  }) =>
    set({
      outputDetails: {
        stdout,
        time,
        memory,
        stderr,
        token,
        compile_output,
        message,
        status: { id, description },
      },
    }),
}));
