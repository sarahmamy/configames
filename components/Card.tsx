import React, { useEffect, useState } from "react";
import { logEvent } from "../lib/analytics";
import fetch from "isomorphic-unfetch";
import { mutate } from "swr";
import icons, { Heart, Slash } from "./Icons";
import classnames from "classnames";

export default ({ record }: { record: IRecord }) => {
  let image;
  try {
    image = record["Image de couverture"][0].thumbnails.large.url;
  } catch (error) {
    image = "/og-image.png";
  }

  const trackClick = () => {
    logEvent("linkClick", record.Nom);
  };
  const [currentlyLiked, setCurrentlyLiked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentlyLiked(!!window.localStorage.getItem(record.id));
    }
  }, []);

  return (
    <div className="z-0 shadow flex flex-col bg-white rounded hover:shadow-xl transition transition-all duration-300 hover:scale-105">
      {/* Image */}
      <div
        className="relative w-full h-64 border-b border-gray-300 rounded-t"
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <a
          href={record["Lien"]}
          rel="noopener noreferer"
          target="_blank"
          onClick={trackClick}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.10) 100%)",
            }}
          />
        </a>
        <div
          className="absolute w-full h-10 bottom-0 flex items-center justify-end p-4 text-white font-monospace"
          style={{
            backgroundColor: "rgba(18, 16, 48, 0.05)",
            textShadow: "0px 1px 2px rgba(0, 0, 0, 0.34)",
          }}
        >
          <div
            className="cursor-pointer flex items-center"
            onClick={async (e) => {
              e.stopPropagation();
              window.localStorage.setItem(
                record.id,
                !currentlyLiked ? "true" : ""
              );
              setCurrentlyLiked(!currentlyLiked);
              if (!currentlyLiked) {
                record.Likes += 1;
                await fetch(`/api/like?id=${record.id}`);
              } else {
                record.Likes -= 1;
                await fetch(`/api/like?id=${record.id}&unlike=true`);
              }
              mutate("/api/content");
            }}
          >
            <span className="mr-2">{record.Likes}</span>
            <Heart filled={currentlyLiked} />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <a
          href={record["Lien"]}
          rel="noopener noreferer"
          target="_blank"
          onClick={trackClick}
        >
          <h1 className="text-center font-bold text-xl pb-3 text-gray-800 hover:text-teal-600">
            {record.Nom}
          </h1>
        </a>

        <p className="leading-normal pb-4">
          {record["Jeu original"] && record["Jeu original"] !== "//" && (
            <>
              <span className="mr-1">
                Le jeu{" "}
                <a
                  className={classnames("text-teal-600 font-semibold", {
                    "hover:text-teal-400":
                      record["Lien vers le jeu original physique"],
                  })}
                  href={record["Lien vers le jeu original physique"]}
                >
                  {record["Jeu original"]}
                </a>{" "}
                en ligne.
              </span>
            </>
          )}
          {record.Commentaire}
        </p>

        <div className="mt-auto">
          <div
            className="max-w-full grid grid-cols-2 overflow-x-hidden"
            style={{ gridTemplateColumns: "4rem 1fr" }}
          >
            <div className="py-2 uppercase tracking-wide font-monospace text-gray-600 text-xs flex items-center">
              Lien
            </div>
            <div className="py-2">
              <a
                href={record["Lien"]}
                rel="noopener noreferer"
                target="_blank"
                onClick={trackClick}
                className="overflow-x-auto whitespace-no-wrap text-sm text-gray-600 hover:text-teal-500"
              >
                {record["Lien"]}
              </a>
            </div>
            <div className="py-2 uppercase tracking-wide font-monospace text-gray-600 text-xs flex items-center">
              Support
            </div>
            <div className="py-2 flex items-center">
              {record["Support (Téléphone, Tablette, Web)"] &&
                ["PC", "Tablette", "Téléphone"].map((device) => {
                  return (
                    <div
                      key={device}
                      className="mr-2 text-gray-600 text-lg relative flex items-center justify-center"
                      title={device}
                    >
                      {record["Support (Téléphone, Tablette, Web)"].indexOf(
                        device
                      ) === -1 && (
                        <span className="absolute text-red-500">
                          <Slash />
                        </span>
                      )}
                      {icons[device]}
                    </div>
                  );
                })}
              {record["Plateforme Commentaire"] && (
                <>
                  <span className="text-gray-600 text-sm ml-1 mr-3">|</span>
                  <span className="text-gray-600 text-sm">
                    {record["Plateforme Commentaire"]}
                  </span>
                </>
              )}
            </div>

            <div className="py-2 uppercase tracking-wide font-monospace text-gray-600 text-xs flex items-center">
              Style
            </div>
            <div className="py-2">
              {record.Catégories &&
                record.Catégories.map((theme: string) => (
                  <span
                    key={theme}
                    className="bg-accent-400 text-white font-monospace rounded-full px-3 py-1 text-xs mr-1 mb-1"
                  >
                    {theme}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
