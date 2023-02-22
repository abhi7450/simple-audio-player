import { DisplayTrack } from "./DisplayTrack";
import { ProgressBar } from "./ProgressBar";
import { Controls } from "./Controls";
import { useRef } from "react";
export const AudioPlayer = () => {
  const audioref = useRef();

  return (
    <div>
      {/* Display Track */}
      <DisplayTrack />
      {/* Progress Bar */}
      <ProgressBar />
      {/* Controls */}
      <Controls />
    </div>
  );
};
