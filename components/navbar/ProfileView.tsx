import React from "react";
import { MdNotificationsNone } from "react-icons/md";

const ProfileView: React.FC<{}> = () => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const profileLinks = ["Profile", "Settings", "Contact Us", "Help"];
  return (
    <div className="flex items-center md:space-x-4">
      <button className="relative rounded-full p-2 hover:bg-gray-100">
        <div className="text-gray-700">
          <MdNotificationsNone size={27} />
        </div>
        <div className="absolute top-1 right-1 rounded-full bg-indigo-600 px-1 font-inter text-sm text-white ">
          0
        </div>
      </button>
      <button
        className="flex flex-col items-center"
        onMouseEnter={() => setIsProfileOpen(!isProfileOpen)}
      >
        <picture>
          <img
            className="h-8 w-8 rounded-full"
            src="https://bit.ly/dan-abramov"
            alt=""
          />
        </picture>
        <div className="font-inter text-xs font-medium">Sakkurthi</div>
      </button>
      {isProfileOpen ? (
        <div
          className="absolute top-[58px] right-1 z-10 flex h-40 w-40 flex-col space-y-1 rounded-md border border-gray-300 bg-white p-2"
          onMouseLeave={() => setIsProfileOpen(!isProfileOpen)}
        >
          {profileLinks.map((link) => (
            <button
              key={link}
              className="rounded-md py-1 font-inter font-medium text-gray-700 hover:bg-blue-600 hover:text-white"
            >
              {link}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProfileView;
