import loadable from "@loadable/component";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";

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

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const tab = location.pathname.split("/")[1];

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h6" component={Link} to="/">RSQUARE PORTAL</Typography>

          <Box width="32px" />

          <Tabs value={tab} onChange={(_, v) => navigate(`/${v}`)}>
            <Tab value="inbound" label="인바운드" />
            <Tab value="client-inform" label="고객정보관리" />
            <Tab value="marketing" label="마케팅" />
            <Tab value="sales" label="영업관리" />
            <Tab value="follow-up" label="사후관리" />
          </Tabs>
        </Toolbar>
      </AppBar>

      <Box flex="1" position="relative">
        <Routes>
          <Route path="/" element={<div>Home</div>} />
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
        </Routes>
      </Box>
    </Box>
  );
}
