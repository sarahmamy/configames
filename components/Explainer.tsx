import React from "react";
import Logo from "./Logo";
import OnlineGamesIcon from "./OnlineGamesIcon";

export default () => {
  return (
    <div className="font-monospace p-4 pt-8 text-gray-800 border-t-4 border-solid border-accent-500">
      <div className="w-10/12 max-w-5xl mx-auto text-center md:flex">
        <div className="flex-grow flex flex-col justify-center">
          <Logo className="text-accent-500 my-4 lg:h-16 md:h-10 h-8 mx-auto"></Logo>
          <p className="py-2">
            Jouez avec vos proches à distance !
            <br />
            Voici une liste de jeux en ligne pour ce confinement #2.
          </p>
        </div>

        <div className="flex justify-center lg:py-12 py-8 w-40 md:w-64 mx-auto">
          <img
            src="/OnlineGamesIcon.svg"
            alt="Deux personnes jouant en ligne"
          />
        </div>
      </div>
    </div>
  );
};

const CTA = ({ children }) => (
  <div className="flex pb-8">
    <svg
      className="mr-2 align-baseline mt-1"
      width="33"
      height="18"
      viewBox="0 0 33 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 9H32M32 9L24.0137 1M32 9L24.0137 17" stroke="#3F3D56" />
    </svg>
    <div className="w-64 text-left">{children}</div>
  </div>
);
