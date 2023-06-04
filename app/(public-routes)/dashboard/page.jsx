"use client";

import styled from "@emotion/styled";
import MainDashboard from "../../../components/DashboardMain/MainDashboard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Dashboard() {
  // const { email } = useSelector(state => state.login.loginUserCredentials);
  const { email } = useSelector(
    (state) => state.persistedReducer.login.loginUserCredentials
  );
  useEffect(() => {
    console.log("MAIN DASHBOARD: ", email);
  }, [email]);
  return (
    <>
      <MainDashboard />
    </>
  );
}
