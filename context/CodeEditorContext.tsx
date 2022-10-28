import { createContext } from "react";

export type CodeEditorTypes = {
  sourceCode: string;
  setSourceCode: (sourceCode: string) => void;
  compilerLanguage: { id: number; name: string; language: string };
  setCompilerLanguage: (compilerLanguage: {
    id: number;
    name: string;
    language: string;
  }) => void;
  customInput: string;
  setCustomInput: (customInput: string) => void;
  outputDetails: { stdout: string };
  setOutputDetails: ({ stdout }: { stdout: string }) => void;
};

export const CodeEditorContext = createContext<CodeEditorTypes | null>(null);
