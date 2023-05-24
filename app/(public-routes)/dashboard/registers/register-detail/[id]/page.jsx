"use client";

import RegisterDetails from "@/components/DashboardMain/pages/Registers/RegistersDetails/RegisterDetails";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  return (
    <>
      <RegisterDetails params={params} />
    </>
  );
};

export default page;
