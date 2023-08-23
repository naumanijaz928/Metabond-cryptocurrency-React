import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import UserLayout from "../../layout/UserLayout";
export default function PrivateRoute(props) {
  // const checkToken = useSelector((state) => state.userObj.userObj);
  const checkToken = { token: true };
  return (
    <>
      {checkToken?.token ? (
        <UserLayout {...props}>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </UserLayout>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
}
