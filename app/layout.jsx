import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "Casilda",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          {children} {/* This renders the passed children */}
        </main>
      </body>
    </html>
  );
};

export default Rootlayout;
