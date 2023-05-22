import React, { useState, useEffect } from "react";
import TvShowDetail from "./TvShowDetail";
import TvShowHome from "./TvShowHome";
import "./styles.css";

function App(prop) {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState();
  const [particularKey, setparticularKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch the schedule for the current day in the US
        const response = await fetch(
          "https://api.tvmaze.com/schedule?country=US&date=2023-04-05"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        // Set the list of shows in the state
        setShows(data.slice(startIndex, startIndex + 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [startIndex]);

  const handleLoadMore = () => {
    setStartIndex(startIndex + 10);
  };

  const handleLoadPrevious = () => {
    setStartIndex(startIndex - 10);
  };

  const handleShowClick = async (show, key) => {
    try {
      // Fetch the show's metadata using the TVmaze API
      console.log(show, key);
      setparticularKey(key);

      const response = await fetch(
        `https://api.tvmaze.com/shows/${show.show.id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const showData = await response.json();
      // Set the selected show in the state
      setSelectedShow(showData);
    } catch (error) {
      console.error("Error fetching data in details:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="font-bold text-lg m-2 text-center">Loading..</div>
      ) : (
        <TvShowHome
          startIndex={startIndex}
          shows={shows}
          handleShowClick={handleShowClick}
          handleLoadMore={handleLoadMore}
          handleLoadPrevious={handleLoadPrevious}
        />
      )}

      <TvShowDetail
        selectedShow={selectedShow}
        particularKey={particularKey}
        shows={shows}
      />
    </>
  );
}

export default App;
