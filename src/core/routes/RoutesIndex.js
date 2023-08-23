import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../views/Error/Error";
import { routes } from "./routes";
const LoginPage = lazy(() => import("../../views/public/Login"));
const ForgetPasswordPage = lazy(() =>
  import("../../views/public/ForgetPassword")
);
const Home = lazy(() =>
  import("../../views/private/Home")
);
export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path="forgetpassword" element={<ForgetPasswordPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {routes.map((route) =>
            !route.submenu ? 
              <Route key={route.id} path={route.route} element={<route.component />}/>
             : 
              route.submenu.map((subroute) => 
                <Route key={subroute.id} path={subroute.route} element={<subroute.component />} />
            )
          )}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
