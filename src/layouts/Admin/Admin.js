
import React, { useEffect } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import logo from "assets/img/logo.svg";
import { BackgroundColorContext } from "contexts/BackgroundColorContext";
import StreamView from "views/StreamView";
import { useDispatch } from "react-redux";
import { getToken } from "utils";
import { VIEWER_STATS_URL } from "constants";
import axios from "axios";
import { fetchStreams } from "store/actions/stream";

var ps;

function Admin(props) {
  const location = useLocation();
  const mainPanelRef = React.useRef(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllStreams = async() => {
      try{
        const token = await getToken();
        if(!token) throw new Error(`HTTP error! statusText: Invalid token`);
        const response = await axios.get(VIEWER_STATS_URL, {
          headers: {
            'Authorization': `Bearer ${token}`
          }}
        );
        if(response.status === 200 && !('code' in response.data)){
          dispatch(fetchStreams({...response.data}));
        }else{
          dispatch(fetchStreams({}));
        }
      }catch(e){
          console.log('error in fetching streams',e)
      }
    }
    fetchAllStreams();
  }, [])

  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div className="wrapper">
            <Sidebar
              routes={routes}
              logo={{
                outterLink: "https://assets.sariska.io/Logo_Sariska.svg",
                text: "SARISKA",
                imgSrc: logo,
              }}
              toggleSidebar={toggleSidebar}
            />
            <div className="main-panel" ref={mainPanelRef} data={color}>
              <AdminNavbar
                brandText={getBrandText(location.pathname)}
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/admin/stream/:streamId"
                  element={<StreamView  />}
                />
                <Route
                  path="/"
                  element={<Navigate to="/admin/dashboard" replace />}
                />
              </Routes>
              {
                // we don't want the Footer to be rendered on map page
                location.pathname === "/admin/maps" ? null : <Footer fluid />
              }
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}

export default Admin;
