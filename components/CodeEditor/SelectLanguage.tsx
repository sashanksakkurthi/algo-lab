import { Listbox } from "@headlessui/react";
import { useContext } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Language } from "../../data/CodeEditorData";
import { CodeEditorContext } from "../../context/CodeEditorContext";

export const SelectLanguage = () => {
  const context = useContext(CodeEditorContext);

  const { compilerLanguage, setCompilerLanguage } = context!;

  return (
    <div className="w-32 md:w-44">
      <Listbox
        value={compilerLanguage}
        onChange={(event) => {
          setCompilerLanguage(event);
        }}
      >
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-gray-500 bg-neutral-800 py-2 pl-3 pr-10 text-left text-xs text-white">
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
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-neutral-800 py-1 text-xs shadow-lg focus:outline-none">
            {Language.map((compilerLanguage, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-4 pr-4 ${
                    active ? "bg-blue-600 text-white" : "text-white"
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