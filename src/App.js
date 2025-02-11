import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import GoogleLogin from "./loginPage";
import Loading from "./loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
