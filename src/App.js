import React, { useState } from "react";
import axios from "axios";

function App() {
  const [responseHeaders, setResponseHeaders] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleApiRequest = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/task3", {
        phonenumber: phoneNumber,
      });

      if (data) {
        console.log(data);
        setResponseHeaders(data);
        if (data.status) {
          window.alert("Success");
        }
      } else {
        window.alert("Invalid response received from the server");
      }
    } catch (error) {
      window.alert(
        error.response ? error.response.data.message : "An error occurred"
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#f4f4f4",
          padding: "50px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Phone Number Lookup</h2>
        <form
          onSubmit={handleApiRequest}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            style={{
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              marginBottom: "20px",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Number
          </button>
        </form>
        {responseHeaders && (
          <div style={{ marginTop: "20px" }}>
            <h3>Response Data:</h3>
            <pre style={{ fontSize: "20px" }}>
              {JSON.stringify(responseHeaders.data, null, 2)}
            </pre>
            <h3>Phone Origin:</h3>
            <pre style={{ fontSize: "20px" }}>
              {JSON.stringify(responseHeaders.headerData, null, 2)}
            </pre>
            <h3>Date:</h3>
            <pre style={{ fontSize: "20px" }}>
              {JSON.stringify(responseHeaders.date, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
