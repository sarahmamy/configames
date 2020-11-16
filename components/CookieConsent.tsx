import React from "react";
import { useLocalStorage } from "@rehooks/local-storage";

export default () => {
  const [cookieConsent, setCookieConsent] = useLocalStorage("cookie-consent");
  if (cookieConsent) {
    return null;
  } else {
    return (
      <div className="px-4 py-3 fixed bottom-0 w-full bg-gray-200 shadow flex items-center">
        <div>
          J'utilise des cookies pour savoir comment vous utilisez ce site, et
          l'améliorer !
        </div>
        <div className="ml-5">
          <button
            className="border py-1 px-2 border-accent-500 rounded text-accent-500 hover:border-accent-400 hover:text-accent-400"
            onClick={() => setCookieConsent("true")}
          >
            OK
          </button>
        </div>
      </div>
    );
  }
};
