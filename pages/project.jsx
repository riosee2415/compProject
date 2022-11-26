import React from "react";
import PublicComp1 from "../components/PublicComp1";

const Project = () => {
  return (
    <div>
      <PublicComp1
        datum={[
          {
            title: "INTRODUCE",
            content: "Introduce Us. Come To Here!",
            link: "/intro",
          },

          {
            title: "OUR TEAM",
            content: "Team Profile And Team Description",
            link: "/team",
          },

          {
            title: "SHOW YOUR THINK",
            content: "If You Contact Us...",
            link: "/contact",
          },
        ]}
      />
    </div>
  );
};

export default Project;
