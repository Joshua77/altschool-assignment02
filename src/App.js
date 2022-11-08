import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Nested } from "./components/Nested";
import { Nested1 } from "./components/Nested1";
import { Nested2 } from "./components/Nested2";
import NotFound from "./components/page404";
import ErrorBoundary from "./components/ErrorBoundary";
import User from "./components/User";
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="routes">
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Nested" element={<Nested />}>
            <Route path="Nested1" element={<Nested1 />} />
            <Route path="Nested2" element={<Nested2 />} />
          </Route>

          <Route path="*" element={<NotFound />} />
          <Route path="User" element={<User />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

//
