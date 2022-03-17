import React, { useEffect, useState } from "react";
import "../Styles/UserCard.css";
const UserCard = ({ searchResult = [], apiData, searchTrue }) => {
  console.log(searchTrue);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(apiData);
    if (searchTrue) {
      setData(searchResult);
    }
  }, [apiData, searchResult, searchTrue]);

  if (data.length === 0) {
    return <h4 className="notFound">No Data found</h4>;
  }

  return (
    <div className="mainCard">
      {data.map((d, i) => {
        return <SinghleUser key={i} data={d} />;
      })}
    </div>
  );
};

const SinghleUser = ({ data }) => {
  const { name, picture, email, dob, location } = data;
  let fullName = Object.values(name).join(" ");
  return (
    <div className={`user_card`}>
      <div className="user_img">
        <img src={picture.medium} alt="" />
      </div>
      <div className="user_info">
        <div className="user_name">
          <h3>
            {fullName} | {dob.age}
          </h3>
          <p>{email}</p>
          <p>
            Address: {location.city} {location.country} {location.postcode}
            {location.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
