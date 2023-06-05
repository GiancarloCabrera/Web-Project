"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import RegisterDetails from "../../../../../../components/DashboardMain/pages/Registers/RegistersDetails/RegisterDetails";

const page = ({ params }) => {
  return (
    <>
      <RegisterDetails params={params} />
    </>
  );
};

export default page;
