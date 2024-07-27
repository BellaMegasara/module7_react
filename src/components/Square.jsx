import React from "react";
import { useSearchParams } from "react-router-dom";

export const Square = () => {
  // STATE / VAR
  const [searchParams, setSearchParams] = useSearchParams();

  const fill = searchParams.get("fill") || "yellow";
  const stroke = searchParams.get("stroke") || "purple";
  // Function

  // return

  return (
    <div
      style={{
        height: "400px",
        width: "400px",
        border: `solid 10px ${stroke}`,
        backgroundColor: fill,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    ></div>
  );
};