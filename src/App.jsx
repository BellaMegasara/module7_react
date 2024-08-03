import "./App.css";
import React from "react";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { Routes, Route } from "react-router-dom";
import { LabOne } from "./components/LabOne";
import { LabTwo } from "./components/LabTwo";
import { CustomHookExamples } from "./containers/CustomHookExamples";
import { ContextWork } from "./containers/ContextWork";
import { Navbar } from "./components/Navbar";
import { Square } from "./components/Square";
import ProtectedRoute from "./components/ProtectedRoute";
import { MuiSlides } from "./containers/MuiSlides";
import { LoginForm } from "./containers/LoginForm";

const App = () => {
  //RETURN
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route index element={<WelcomePage />} />

        <Route
          path="lab-one"
          element={
            <ProtectedRoute>
              <LabOne />
            </ProtectedRoute>
          }
        />

        <Route path="lab-two" element={<LabTwo />} />

        {/* <Route path="slide-work" />
        <Route index element={<SlideWork />} /> */}
        {/* <Route path="name-ref/:name" element={<NameComponentForRefExample />} /> */}

        <Route path="custom-hooks" element={<CustomHookExamples />} />
        <Route path="context-work" element={<ContextWork />} />
        <Route path="square" element={<Square />} />
        <Route path="mui-slides" element={<MuiSlides />} />
        <Route path="login-form" element={<LoginForm />} />

        <Route path="*" element={<div>Hey this path</div>} />
      </Routes>
    </UserProvider>
  );
};

export default App;
