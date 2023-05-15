"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const [registerDetail, setRegisterDetail] = useState();

  useEffect(() => {
    const data = {
      name: "Prueba1",
      apellido: "Estban",
      id: 1,
    };
    setRegisterDetail(data);
  }, []);

  return (
    <div>
      <h1>{registerDetail?.name}</h1>
      <p>{params.id}</p>
      <Link href="dashboard/registers">Go back</Link>
    </div>
  );
};

export default page;
