import React from "react";
import { CodeEditorContext } from "../../context/CodeEditorContext";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

export const CompileButtons = () => {
  const context = React.useContext(CodeEditorContext);
  const [compilerLoading, setCompilerLoading] = React.useState(false);

  const { sourceCode, compilerLanguage, customInput, setOutputDetails } =
    context!;

  const CompileCode = async () => {
    await axios
      .post(
        `${process.env
          .NEXT_PUBLIC_CODE_SUBMISSION_URL!}?base64_encoded=true&wait=false`,
        {
          source_code: Buffer.from(sourceCode).toString("base64"),
          language_id: compilerLanguage.id,
          stdin: Buffer.from(customInput).toString("base64"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setTimeout(() => {
          getOutput(response.data.token);
        }, 2000);
        setCompilerLoading(false);
      });
  };

  const getOutput = async (token: string) => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!}/${token}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setOutputDetails(response.data);
        const statusId = response.data.status.id;
        if (statusId === 1 || statusId === 2) {
          setTimeout(() => {
            getOutput(token);
          }, 2000);
        }
      })
      .catch((error) => console.log(error));
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
          onClick={() => {
            setCompilerLoading(true);
            setOutputDetails({ stdout: "" });
            CompileCode();
          }}
        >
          Compile Run
        </button>
      )}
    </>
  );
};
