import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import Loading from "../../components/Loading";
import DashNav from "./dashNav/DashNav";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { authLoading } = useContext(AuthContext);

  if (authLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex min-h-screen">
      {/* helmet */}
      <Helmet>
        <title>Dashboard | Admin</title>
      </Helmet>

      <DashNav></DashNav>
      <main className="flex-1 p-8 bg-[var(--bg-main)]">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
