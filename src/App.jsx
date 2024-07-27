import "./App.css";
import React from 'react'
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { Routes, Route } from "react-router-dom";
import { LabOne } from "./components/LabOne";
import { LabTwo } from "./components/LabTwo";
import { SlideWork } from "./containers/Slidework";
import { CustomHookExamples } from "./containers/CustomHookExamples";
import { ContextWork } from "./containers/ContextWork";
import { Navbar } from "./components/Navbar";

const App = () => {


  //RETURN
  return (
    <UserProvider>
    <Routes>
    <Route index element={<WelcomePage />} />
    <Route path="test" element={<div>something</div>} />
    
    <Route path="lab-one" element={<LabOne />} />
    <Route path="lab-two" element={<LabTwo />} />

    <Route path="slide-work" 
    <Route index element={<SlideWork />} />
    <Route path="name-ref/:name" element={<NameComponentForRefExample />} />

    <Route path="custom-hooks" element={<CustomHookExamples />} />
    <Route path="context-work" element={<ContextWork />} />

    <Route path="*" element={<div>Hey this path</div>} />
    </Routes>
    </UserProvider>
  );
};

export default App;
