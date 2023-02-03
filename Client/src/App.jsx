import React, { useState, useEffect } from "react";
import Status from "./components/status.component";
import { amazon, google, all_status } from "../services/http.services";

const App = () => {
  const [amazonStatus, setAmazonStatus] = useState({});
  const [googleStatus, setGoogleStatus] = useState({});
  const [allStatus, setAllStatus] = useState({});
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoad(true);
      const amazonRes = await fetch(amazon);
      const amazonData = await amazonRes.json();

      const googleRes = await fetch(google);
      const googleData = await googleRes.json();

      const allRes = await fetch(all_status);
      const allData = await allRes.json();
      console.log(allData);
      setInterval(() => {
        setAllStatus(allData);
        setGoogleStatus(googleData);
        setAmazonStatus(amazonData);
        setLoad(false);
      }, 3000);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Status
        amazonStatus={amazonStatus}
        googleStatus={googleStatus}
        allStatus={allStatus}
        load={load}
      />
    </>
  );
};

export default App;
