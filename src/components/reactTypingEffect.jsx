import React from "react";
import ReactTypingEffect from "react-typing-effect";

const ReactTypingEffectDemo = () => {
  return (
    <div className="type-anim">
      <ReactTypingEffect
        text={[
          "Acquistion strategist",
          "Campaign executioner",
          "Semi-technical marketing lead"
        ]}
        speed={100}
        eraseDelay={450}
      />
    </div>
  );
};
export default ReactTypingEffectDemo;
