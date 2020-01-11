import React from "react";

export default function Header() {
  return (
    <div className="header">
      <input
        className="searchBar"
        type="text"
        name="search"
        value="Buscar..."
      />
      <img className="logo" src="./media/LaNacionLogo.jpg" />
      <button className="suscribeBtn">SUSCRIBITE</button>
      <button className="ingresarBtn">INGRESAR</button>
    </div>
  );
}
