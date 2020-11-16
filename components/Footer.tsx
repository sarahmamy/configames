import React from "react";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const iconParams = {
  size: 40,
  iconFillColor: "#767392",
  bgStyle: { fill: "none" },
};

export default () => (
  <div className="pt-8">
    <div className="text-center font-monospace text-gray-800 pb-12">
      Une question ou suggestion d'amélioration ?{" "}
      <a
        className="underline text-gray-800 hover:text-gray-600"
        href="mailto:mamysrh+configames@gmail.com"
      >
        Contactez-moi ici
      </a>
      &nbsp;!
    </div>
    <div className="pt-10 pb-4 text-center text-gray-700">
      <p>
        Fait avec ❤︎ en confinement by{" "}
        <a
          className="underline text-gray-800 hover:text-teal-600"
          href="https://github.com/sarahmamy"
        >
          @sarahmamy
        </a>{" "}
        <a href="https://github.com/sarahmamy/configames">
          <img
            className="h-4 w-4 ml-4 inline-block hover:opacity-75"
            src="https://github.githubassets.com/favicons/favicon.svg"
          />
        </a>
      </p>
    </div>
  </div>
);
