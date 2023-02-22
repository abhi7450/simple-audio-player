import "./styles.css";
import { toast, Toaster } from "react-hot-toast";
import { AudioPlayer } from "./components/AudioPlayer";

export default function App() {
  return (
    <div className="App">
      <AudioPlayer />
      {/* <button onClick={notify}> Make Me A Toast</button>
      <Toaster position="top-right" /> */}
    </div>
  );
}
