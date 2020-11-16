import ReactGA from "react-ga";

export const initGA = () => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize("G-X1P2TBCF36");
  }
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category: string, action: string) => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description: string, fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
