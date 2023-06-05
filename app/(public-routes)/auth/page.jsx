import React from "react";
import LoginCard from "../../../components/LoginCard";
import theme from "../../../styles/Material_Ui";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#052f33",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Link href="/">
        <button
          style={{
            position: "absolute" /* Agregamos posición absoluta al botón */,
            top: "10px" /* Ajusta la distancia desde la parte superior */,
            right: "10px" /* Ajusta la distancia desde el lado derecho */,
            backgroundColor: "transparent",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
          }}
        >
          Go back
        </button>
      </Link>

      <LoginCard />
    </div>
  );
}
