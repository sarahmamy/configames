import React from "react";
import Logo from "../components/Logo";

export default () => (
  <div className="text-center">
    <a href="/">
      <Logo className="text-accent-500 my-4 lg:h-16 md:h-10 h-8 mx-auto"></Logo>
    </a>
    <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
    <iframe
      className="airtable-embed airtable-dynamic-height"
      src="https://airtable.com/embed/shrmebDos1WfemaAk?backgroundColor=purple"
      frameBorder="0"
      width="100%"
      height="831"
      style={{ background: "transparent", border: " 1px solid #ccc" }}
    ></iframe>
  </div>
);
