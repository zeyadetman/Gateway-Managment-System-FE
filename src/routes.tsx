import { useEffect } from "react";
import { Route, useNavigate } from "react-router-dom";
import App from "./views";
import DeviceUpdate from "./views/Device/DeviceUpdate";
import ViewDevice from "./views/Device/ViewDevice";
import GatewayUpdate from "./views/Gateway/GatewayUpdate";
import ListGateways from "./views/Gateway/ListGateways";
import ViewGateway from "./views/Gateway/ViewGateway";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);

  return <div>404</div>;
};

export const routes = [
  { path: "/", element: <App /> },
  { path: "/gateway/new", element: <GatewayUpdate /> },
  { path: "/gateway/:id", element: <ViewGateway /> },
  { path: "/gateways", element: <ListGateways /> },
  { path: "/device/:id/edit", element: <DeviceUpdate /> },
  { path: "/device/new", element: <DeviceUpdate /> },
  { path: "/device/:id", element: <ViewDevice /> },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const renderRoutes = () => {
  return routes.map((route) => (
    <Route path={route.path} key={route.path} element={route.element} />
  ));
};
