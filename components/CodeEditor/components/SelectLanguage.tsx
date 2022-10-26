import { Listbox } from "@headlessui/react";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Language } from "../../../data/CodeEditorData";
import { CodeEditorContext } from "../../../context/CodeEditorContext";

export const SelectLanguage = () => {
  const context = useContext(CodeEditorContext);

  if (!context) return null;
  const { compilerLanguage, setCompilerLanguage } = context;

  return (
    <div className="z-10 w-44">
      <Listbox
        value={compilerLanguage}
        onChange={(event) => {
          setCompilerLanguage(event);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-gray-400 bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-xs">
            <span className="block truncate font-roboto font-normal">
              {compilerLanguage.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <FiChevronDown
                className="h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white py-1 text-base shadow-lg focus:outline-none sm:text-xs">
            {Language.map((compilerLanguage, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active ? "bg-blue-600 text-white" : "text-gray-800"
                  }`
                }
                value={compilerLanguage}
              >
                <span className="block truncate font-roboto font-normal">
                  {compilerLanguage.name}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
