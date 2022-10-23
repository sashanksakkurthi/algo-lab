export const OnSubmitCode = async ({
  language,
  sourceCode,
  setStdout,
  stdin,
}: {
  language: number;
  sourceCode: string;
  setStdout: (stdout: string) => void;
  stdin: string;
}) => {
  await fetch(`${process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!}/`, {
    method: "POST",
    body: JSON.stringify({
      language_id: language,
      source_code: sourceCode,
      stdin: stdin,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      CheckStatus(response.token, setStdout);
    });
};

export const CheckStatus = async (
  token: string,
  setStdout: (stdout: string) => void
) => {
  await fetch(`${process.env.NEXT_PUBLIC_CODE_SUBMISSION_URL!}/${token}/`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      setStdout(response.stdout);
      let statusId = response.status?.id;
      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          CheckStatus(token, setStdout);
        }, 2000);
        return;
      }
    });
};
