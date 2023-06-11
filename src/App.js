import "./App.css";
import axios from "axios";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PreviewCard from "./components/PreviewCard/PreviewCard";


function App() {

  const [url, setUrl] = useState("");
  const [details, setDetails] = useState([]);

  const apiUrl = "https://linkprevieweerapi.onrender.com";  // link previewer api endpoint

  function sendUrl(e) {

    setUrl(e.target.value);
  }

  async function getDetails(e) {

      e.preventDefault();

      const res = await axios.post(apiUrl, {
        url: url,
      });

      setDetails(res.data.data);

    
  }

  return (
    <>

      <Navbar />

      <div className="cardAndInput">

        <form className="inputBox" onSubmit={(e) => getDetails(e)}>
          <input
            type="text"
            value={url}
            onChange={(e) => sendUrl(e)}
            placeholder="Enter a Link"
          />
          <button type="submit">Preview</button>
        </form>

        {details.length != 0 ? <PreviewCard details={details} /> : <h1></h1>}

      </div>
      </>
  );
}

export default App;
