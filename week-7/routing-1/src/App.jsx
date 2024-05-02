import { lazy, Suspense, BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const LandingPage = lazy(() => import("./components/LandingPage"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={"loading..."}><LandingPage /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => { navigate("/dashboard")}}>Dashboard</button>
      <button onClick={() => { navigate("/")}}>Landing Page</button>
    </div>
  );
}

export default App;
