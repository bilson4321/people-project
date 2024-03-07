import React, { useEffect } from "react";
import "./App.css";
import PeopleDetail from "./Component/PeopleDetail";
import Header from "./Component/Header";
import peopleData from "./people.json";

const App = () => {
  const [people, setPeople] = React.useState([]);
  const [detail, setDetail] = React.useState(false);
  const [profile, setProfile] = React.useState({});

  useEffect(() => {
    setTimeout(() => {
      setPeople(peopleData);
    }, 1000);
  }, []);

  const onclick = (id) => {
    setDetail(true);
    setProfile(people.find((person) => person.id === id));
  };

  const closeDetail = () => {
    setDetail(false);
    setProfile({});
  };

  return (
    <>
      <Header />
      <div className="container">
        {detail ? (
          <PeopleDetail profile={profile} closeFunction={closeDetail} />
        ) : (
          <ul>
            {people.map((value) => {
              return (
                <li key={value.id}>
                  <div
                    className="thumbnail-profile"
                    onClick={() => onclick(value.id)}
                  >
                    <img
                      alt="thumbnail"
                      className="thumbnail-icon"
                      src={value.profileImage}
                    ></img>
                    <div className="name-placeholder">
                      {value.firstName}
                      {"      "}
                      {value.lastName}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default App;
