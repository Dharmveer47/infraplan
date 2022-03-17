import React, { useEffect } from "react";
import Logo from "../logo.svg";
import UserCard from "./UserCard";
import { capitalizeFirstLetter, searchResult } from "./funcations";
import "../Styles/App.css";

const Landing = ({ data = [], searchTrue }) => {
  const [apiData, setApiData] = React.useState([]);
  let apiUrl = "https://randomuser.me/api/?results=15";

  const getData = async (Url) => {
    const response = await fetch(Url);
    const data = await response.json();
    setApiData(data.results);
  };

  useEffect(() => {
    getData(apiUrl);
  }, [apiUrl]);

  if (apiData.length === 0) {
    return (
      <div className="Loading">
        <img src={Logo} alt="logo" />
        <h4>Loading...</h4>
      </div>
    );
  }
  const [sname = {}, fname = {}, lname = {}] = capitalizeFirstLetter(data);
  const search = searchResult(apiData, sname, fname, lname);
  // console.log(search);
  return (
    <div>
      <UserCard
        searchTrue={searchTrue}
        searchResult={search}
        apiData={apiData}
        setApiData={setApiData}
      />
    </div>
  );
};

export default Landing;
