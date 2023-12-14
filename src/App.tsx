import loadable from "@loadable/component";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Logo from "./assets/rsq-logo-large.svg";

const XProperty = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);
const XCollect = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);

const XInbound = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);
const XClientInform = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);
const XMarketing = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);
const XSales = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);
const XFollowUp = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);

const XSetting = loadable.lib(
  // @ts-ignore
  () => import("https://test-menu-1.vercel.app/service.js")
);

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const tab = location.pathname.split("/")[1];

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <AppBar position="sticky" color="default" elevation={1}>
        <Toolbar>
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
          <Box width="32px" />
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
          </Tabs>
          <Box flex="1" />
          <Button variant="outlined" color="primary" onClick={() => {
            navigate("/my-work");
          }}>
            내 업무
          </Button>
          <IconButton size="small">
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box flex="1" position="relative">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route
            path="/property/*"
            // @ts-ignore
            element={<XProperty children={() => <x-property />} />}
          />
          <Route
            path="/collect/*"
            // @ts-ignore
            element={<XCollect children={() => <x-collect />} />}
          />
          <Route
            path="/inbound/*"
            // @ts-ignore
            element={<XInbound children={() => <x-inbound />} />}
          />
          <Route
            path="/client-inform/*"
            // @ts-ignore
            element={<XClientInform children={() => <x-client-inform />} />}
          />
          <Route
            path="/marketing/*"
            // @ts-ignore
            element={<XMarketing children={() => <x-marketing />} />}
          />
          <Route
            path="/sales/*"
            // @ts-ignore
            element={<XSales children={() => <x-sales />} />}
          />
          <Route
            path="/follow-up/*"
            // @ts-ignore
            element={<XFollowUp children={() => <x-follow-up />} />}
          />
          <Route
            path="/setting/*"
            // @ts-ignore
            element={<XSetting children={() => <x-setting />} />}
          />
          <Route path="/my-work" element={<div>My Work</div>} />
        </Routes>
      </Box>
    </Box>
  );
}
