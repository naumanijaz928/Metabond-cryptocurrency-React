import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import BasicLayout from "../../layout/BasicLayout";
import UserLayout from "../../layout/UserLayout";

export default function PublicRoute(props) {
  return (
    <UserLayout {...props}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </UserLayout>
  );
}
