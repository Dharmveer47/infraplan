import React, { useEffect } from "react";
import Logo from "../logo.svg";
import UserCard from "./UserCard";
import { capitalizeFirstLetter, searchResult } from "./funcations";
import '../Styles/App.css'


const Landing = ({ data = [] }) => {



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
        <h4 >Loading...</h4>
      </div>
    );
  }
  const [sname = {}, fname = {}, lname = {}] = capitalizeFirstLetter(data);
  searchResult(apiData, sname, fname, lname);

  return (
    <div>
      <UserCard
        searchResult={searchResult(apiData, sname, fname, lname)}
        apiData={apiData}
      />
    </div>
  );
};


export default Landing;
