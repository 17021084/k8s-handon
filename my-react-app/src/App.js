import "./App.css";
import React from "react";
import axios from "axios";
const BASE_URL = "http://server-react";

function App() {
  const [user, setUser] = React.useState([]);

  const getUser = async () => {
    try {
      const res = await axios(BASE_URL + "/user");
      // console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={getUser}>Click</button>
      <button
        onClick={() => {
          setUser([]);
        }}
      >
        Clear
      </button>

      <div>click to get user</div>
      {user?.map((user, idx) => {
        return (
          <div key={idx}>
            <div> ---- </div>
            <div> {user?.id} </div>
            <div> {user?.name} </div>
            <div> ---- </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
