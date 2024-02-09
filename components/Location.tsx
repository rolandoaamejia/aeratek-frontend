import { Maps } from "@/interfaces/Maps";
import React from "react";

interface Props {
  Maps: Maps;
}

const Location: React.FC<Props> = ({ Maps }) => {
  const imageUrl = "https://rolando1001.pythonanywhere.com/images/map/google-maps-22.jpg";

  return (
    <div
      className="container h-[50vw] lg:h-[80vh] w-screen mx-auto my-12 px-6 shadow-md"
      style={{
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <img src={imageUrl} alt="Mapa" />
    </div>
  );
};

export default Location;