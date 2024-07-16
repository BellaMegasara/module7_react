import "./App.css";
import { useState } from "react";
import { SlideWork } from "./containers/slideWork";
import { LabOne } from "./components/LabOne";
import { LabTwo } from "./components/LabTwo";
import { CustomHookExamples } from "./containers/CustomHookExamples";
import { ContextWork } from "./containers/ContextWork";
import { UserProvider } from "./context/UserContent";

// COMPONENT FUNCTION NAME
const UserContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider> 
const App = () => {
  const [contentName, setContentName] = useState("Lab 1");

  const contentConfig = [
    { lab: "Lab 1" },
    { lab: "Lab 2" },
    { lab: "slide work"},
    { lab: "custom hooks"},
    { lab: "Context work"}
  ];

  const displayHandler = () => {
    switch (contentName) {
      case contentConfig[0].lab:
        return <LabOne />;
      case contentConfig[0].lab:
          return <LabTwo />; 
      case contentConfig[1].lab:
        return <SlideWork />;
      case contentConfig[2].lab:
        return <CustomHookExamples />;
      case contentConfig[3].lab:
        return <ContextWork />;
      default:
        return (
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            Click on a Lab button to see the content
          </div>
        );
    }
  }
  const buttonConstructor = () => {
    const buttonElementArray = contentConfig.map((content) => {
      return (
        <button
          key={content.lab}
          onClick={() => setContentName(content.lab)}
          style={{ margin: "5px" }}
        >
          {content.lab}
        </button>
      );
    });

    return buttonElementArray;
  };

  //RETURN
  return (
    <UserProvider>

    <div>
      <p>Module Seven Starts Here</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5px",
        }}
      >
        {buttonConstructor()}
      </div>

      <div
        style={{
          display: "flex",
          margin: "0 auto",
          width: "90%",
          height: "70vh",
          border: "red 1px solid",
          overflow: "scroll",
        }}
      >
        {displayHandler()}
      </div>
    </div>
    </UserProvider>
  );
};

export default App;
