import React from "react";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";
import { useCodeEditorStore } from "../store/CodeEditorStore";

export const CompileButtons = () => {
  const [compilerLoading, setCompilerLoading] = React.useState(false);
  const { compilerLanguage, sourceCode, customInput, setOutputDetails } =
    useCodeEditorStore((state) => ({
      compilerLanguage: state.compilerLanguage,
      sourceCode: state.sourceCode,
      customInput: state.customInput,
      setOutputDetails: state.setOutputDetails,
    }));

  const handleCompile = async () => {
    setCompilerLoading(true);
    await axios
      .post(
        process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!,
        {
          source_code: btoa(sourceCode),
          language_id: compilerLanguage.id,
          stdin: btoa(customInput),
        },
        {
          params: {
            base64_encoded: true,
          },
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
          },
        }
      )
      .then((response) => {
        getOutput(response.data.token);
      })
      .catch((error) => {
        setOutputDetails({
          stdout: "",
          time: 0,
          memory: 0,
          stderr: "",
          token: "",
          compile_output: "Compilation Error",
          message: "",
          status: {
            description: "Compilation Error",
            id: 6,
          },
        });
      });
  };

  const getOutput = async (token: string) => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL! + "/" + token,
        {
          params: {
            base64_encoded: true,
          },
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
          },
        }
      );
      const statusId = response.data.status.id;
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          getOutput(token);
        }, 2000);
      }
      setOutputDetails(response.data);
      setCompilerLoading(false);
    } catch (error) {
      setOutputDetails({
        stdout: "",
        time: 0,
        memory: 0,
        stderr: "",
        token: "",
        compile_output: "Compilation Error",
        message: "",
        status: {
          description: "Compilation Error",
          id: 6,
        },
      });
      setCompilerLoading(false);
    }
  };

  return (
    <>
      {compilerLoading ? (
        <div className="flex w-40 justify-center rounded-md border border-blue-600 py-1 font-inter font-medium text-blue-600">
          <div role="status">
            <CgSpinner size={23} className="mr-2 animate-spin fill-blue-600" />
          </div>
          Progress
        </div>
      ) : (
        <button
          className="w-40 rounded-md bg-blue-600 py-1 font-inter font-medium text-white hover:bg-blue-700"
          disabled={!sourceCode}
          onClick={() => {
            handleCompile();
          }}
        >
          Compile Run
        </button>
      )}
    </>
  );
};
