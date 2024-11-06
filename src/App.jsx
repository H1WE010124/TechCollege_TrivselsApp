import {UnixToTime} from "./components/unixToTime/UnixToTime";
import { useState } from "react";


function App() {
  
  const [timestamp, setTimestamp] = useState(1636543123); // Example Unix timestamp

  return (
      <UnixToTime unixTimestamp={timestamp} />
  );
};
export default App;
