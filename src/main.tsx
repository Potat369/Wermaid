import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.tsx";
import App from "./pages/App.tsx";
import AddGame from "./pages/games/AddGame.tsx";
import Game from "./pages/games/Game.tsx";
import Discovery from "./pages/games/Discovery.tsx";
import Profile from "./pages/Profile.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import PrivateRoute from "./route/PrivateRoute.tsx";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="game">
            <Route path="add" element={<AddGame />} />
            <Route path=":slug" element={<Game />} />
          </Route>
          <Route path="discovery" element={<Discovery />} />
          <Route element={<PrivateRoute />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

TimeAgo.addDefaultLocale(en);
