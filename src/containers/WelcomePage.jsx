import React, { useState } from "react";
import { SlideWork } from "./SlideWork";
import { LabOne } from "../components/LabOne";
import { LabTwo } from "../components/LabTwo";
import { CustomHookExamples } from "../containers/CustomHookExamples";
import { ContextWork } from "../containers/ContextWork";


export const WelcomePage = () => {
//state
    const [contentName, setContentName] = useState("Lab 1");

    const contentConfig = [
      { lab: "Lab 1" },
      { lab: "Lab 2" },
      { lab: "Slide work" },
      { lab: "Custom hooks" },
      { lab: "Context work" },
    ];

//func
    const displayHandler = () => {
        switch (contentName) {
          case contentConfig[0].lab:
            return <LabOne />;
          case contentConfig[1].lab:
            return <LabTwo />;
          case contentConfig[2].lab:
            return <SlideWork />;
          case contentConfig[3].lab:
            return <CustomHookExamples />;
          case contentConfig[4].lab:
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
      };

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




    return (
        <div>
            <p>Welcome to the Welcome Page</p>
        </div>
    );
};
return (

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
            width: "100%",
            height: "70vh",
            border: "red 1px solid",
            overflow: "scroll",
          }}
        >
          {displayHandler()}
        </div>
      </div>
 
  );
        };