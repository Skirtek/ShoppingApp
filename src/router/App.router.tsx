import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { Navbar } from "../components/Navbar";
import { Profile } from "../components/profile/Profile";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Store } from "../components/store/Store";
import { UnauthorizedRoute } from "../components/UnauthorizedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route
          path="/login"
          element={
            <UnauthorizedRoute>
              <Login />
            </UnauthorizedRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
};
