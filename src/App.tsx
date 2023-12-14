import loadable from "@loadable/component";
import {
  AppBar,
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { FC, createElement, useMemo } from "react";
import Logo from "./assets/rsq-logo-large.svg";

const DynamicComponent: FC<{ url: string; component: string }> = ({
  url,
  component,
}) => {
  const Lib = useMemo(() => {
    if (!url) return null;

    return loadable.lib(() => import(url), {
      fallback: (
        <Backdrop open>
          <CircularProgress />
        </Backdrop>
      ),
    });
  }, [url]);

  if (!Lib) return <></>;

  return (
    <Lib
      children={() =>
        createElement(component, {
          style: { display: "flex", flexDirection: "column", flex: "1" },
        })
      }
    />
  );
};

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const tab = location.pathname.split("/")[1];

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar sx={{ gap: "8px" }}>
          <img
            src={Logo}
            alt="logo"
            width="auto"
            height="16px"
            onClick={() => {
              navigate("/");
            }}
            style={{
              cursor: "pointer",
            }}
          />
          <Box width="24px" />
          <Tabs value={tab} onChange={(_, v) => navigate(`/${v}`)}>
            <Tab value="" sx={{ minWidth: 0, width: 0, p: 0 }} />
            <Tab value="property" label="건물/매물" />
            <Tab value="collect" label="정보수집/지원" />
            <Tab value="inbound" label="인바운드" />
            <Tab value="client-inform" label="고객정보관리" />
            <Tab value="marketing" label="마케팅" />
            <Tab value="sales" label="영업관리" />
            <Tab value="follow-up" label="사후관리" />
            <Tab value="setting" label="설정" />
            <Tab value="my-work" sx={{ minWidth: 0, width: 0, p: 0 }} />
          </Tabs>
          <Box flex="1" />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              navigate("/my-work");
            }}
          >
            <Typography variant="button" noWrap>
              내 업무
            </Typography>
          </Button>
          <IconButton size="small">
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box display="flex" flexDirection="column" flex="1" position="relative">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route
            path="/property/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/property.js"
                component="x-property"
              />
            }
          />
          <Route
            path="/collect/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/collect.js"
                component="x-collect"
              />
            }
          />
          <Route
            path="/inbound/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/inbound.js"
                component="x-inbound"
              />
            }
          />
          <Route
            path="/client-inform/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/client-inform.js"
                component="x-client-inform"
              />
            }
          />
          <Route
            path="/marketing/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/marketing.js"
                component="x-marketing"
              />
            }
          />
          <Route
            path="/sales/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/sales.js"
                component="x-sales"
              />
            }
          />
          <Route
            path="/follow-up/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/follow-up.js"
                component="x-follow-up"
              />
            }
          />
          <Route
            path="/setting/*"
            element={
              <DynamicComponent
                url="https://test-menu-1.vercel.app/setting.js"
                component="x-setting"
              />
            }
          />
          <Route path="/my-work" element={<div>My Work</div>} />
        </Routes>
      </Box>
    </Box>
  );
}
