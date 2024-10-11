import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [paras, setParas] = useState(4); // Set default number of paragraphs
  const [html, setHtml] = useState(false); // Set default HTML flag
  const [text, setText] = useState(""); // State for the fetched text

  useEffect(() => {
    // Use a different CORS proxy
    const corsProxy = "https://api.allorigins.win/raw?url="; 
    const hipsumApi = `http://hipsum.co/api/?type=hipster-centric&paras=${paras}`;

    axios
      .get(`${corsProxy}${encodeURIComponent(hipsumApi)}`)
      .then((response) => {
        setText(response.data.join(" ")); // Update the state with fetched text
        console.log(response.data); // Log the text
      })
      .catch((err) => {
        console.error("Error fetching the data:", err); // Log any errors
      });
  }, [paras, html]); // Dependencies: Run the effect whenever `paras` or `html` change

  return (
    <div>
      <h2>Fetched Text</h2>
      <p>{text}</p>
    </div>
  );
}

export default App;
