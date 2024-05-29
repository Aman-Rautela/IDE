import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  const isCompiledLanguage = ["c", "cpp"].includes(language);
  const version = isCompiledLanguage ? null : LANGUAGE_VERSIONS[language];

  const response = await API.post("/execute", {
    language: language,
    version: version,
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
