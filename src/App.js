import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import RootLayout from "./layouts/RootLayout";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ForgetPage from "./pages/Forget";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/home' element={<HomePage />}>
          {" "}
        </Route>
        <Route path='/about' element={<AboutPage />}>
          {" "}
        </Route>
        <Route path='/contact' element={<ContactPage />}>
          {" "}
        </Route>
        <Route path='/blog' element={<BlogPage />}>
          {""}
        </Route>
        <Route path='/login' element={<LoginPage />}>
          {" "}
          {""}
        </Route>
        <Route path='/register' element={<RegisterPage />}>
          {""}
          {""}
        </Route>
        <Route path='/forget' element={<ForgetPage />}>
          {""}
          {""}
        </Route>
      </Route>
    </Routes>
  );
}
export default App;

/* <div className="App">
       <Header></Header>
       <Content></Content>
      <Footer /> 
    </div> */
