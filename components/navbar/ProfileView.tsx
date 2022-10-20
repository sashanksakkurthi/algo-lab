import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import { Menu } from "@headlessui/react";
import { Fragment } from "react";

const ProfileView: React.FC<{}> = () => {
  const profileLinks = ["Contact Us", "Help"];
  return (
    <div className="flex items-center">
      <button className="relative rounded-full p-2 hover:bg-gray-100">
        <div className="text-gray-700">
          <MdNotificationsNone size={27} />
        </div>
        <div className="absolute top-1 right-1 rounded-full bg-indigo-600 px-1 font-inter text-sm text-white ">
          0
        </div>
      </button>
      <Menu>
        <Menu.Button className={"flex flex-col items-center px-4"}>
          <>
            <picture>
              <img
                className="h-7 w-7 rounded-full"
                src="https://bit.ly/dan-abramov"
                alt=""
              />
            </picture>
            <div className="font-inter text-xs font-medium">Sakkurthi</div>
          </>
        </Menu.Button>
        <Menu.Items>
          <div className="absolute top-[3.25rem] right-1 z-10 flex w-36 flex-col space-y-1 rounded-md border border-gray-300 bg-white p-2">
            {profileLinks.map((link) => (
              <Menu.Item key={link} as={Fragment}>
                {({ active }) => (
                  <button
                    key={link}
                    className="rounded-md py-1 font-inter font-medium text-gray-700 hover:bg-blue-600 hover:text-white"
                  >
                    {link}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default ProfileView;
