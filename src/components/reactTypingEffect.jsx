import React from "react";
import ReactTypingEffect from "react-typing-effect";

const ReactTypingEffectDemo = () => {
  return (
    <div>
      <ReactTypingEffect
        text={[
          "Acquistion strategist",
          "Campaign executioner",
          "Semi-technical marketing lead"
        ]}
        speed={150}
        eraseDelay={500}
      />
    </div>
  );
};
export default ReactTypingEffectDemo;
