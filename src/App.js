import React from "react";
// import Caraousel from "./Components/caraousel";
import Craousel from "./Components/ReactCraousel";
import Info from "./Components/info";
export default function App() {
  // return <Caraousel />;
  return (
    <div style={{ backgroundColor: "black" }}>
      <Craousel />
      <Info />
    </div>
  );
}
