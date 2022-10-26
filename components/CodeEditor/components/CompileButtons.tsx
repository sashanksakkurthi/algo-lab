import axios from "axios";
import React, { useContext } from "react";
import { CodeEditorContext } from "../../../context/CodeEditorContext";
import { CgSpinner } from "react-icons/cg";

export const CompilerButtons = () => {
  const context = useContext(CodeEditorContext);

  if (!context) return null;
  const {
    sourceCode,
    customInput,
    compilerLanguage,
    setOutputDetails,
    setCompilerLoading,
    compilerLoading,
  } = context;

  const Compile = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!}`, {
      method: "POST",
      body: JSON.stringify({
        language_id: compilerLanguage.id,
        source_code: sourceCode,
        stdin: customInput,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        CheckStatus(response.token);
      });
  };

  const CheckStatus = async (token: string) => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!}/${token}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "content-type": "application/json",
        },
      })
      .then((response) => {
        setOutputDetails(response.data);
        let statusId = response.data.status?.id;
        if (statusId === 1 || statusId === 2) {
          setTimeout(() => {
            CheckStatus(token);
            setCompilerLoading(false);
            console.log();
          }, 2000);
          return;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {compilerLoading ? (
        <div className="flex w-52 justify-center rounded-md border border-blue-600 py-2 font-inter font-medium text-blue-700 opacity-60">
          <div role="status">
            <CgSpinner size={23} className="mr-2 animate-spin fill-blue-600" />
          </div>
          Progress
        </div>
      ) : (
        <button
          className="w-52 rounded-md bg-blue-600 py-2 font-inter font-medium text-white hover:bg-blue-700"
          onClick={() => {
            setCompilerLoading(true);
            Compile();
          }}
        >
          Compile Run
        </button>
      )}
    </>
  );
};
