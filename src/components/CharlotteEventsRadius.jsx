import React, { useState, useEffect } from "react";

const CharlotteEvents = () => {
  const [events, setEvents] = useState([]);
  const [eventsMeta, setEventsMeta] = useState({});

  useEffect(() => {
    const fetchCharlotteEvents = async () => {
      try {
        const data = await fetch(
          `https://api.seatgeek.com/2/events?geoip=199.59.212.205&range=10mi&client_id=MzUxNTA5MTl8MTY5MDI1MzI4MS44NTI1NDM4`
        );
        const results = await data.json();
        console.log(results.events);
        // console.log(results.meta);
        setEvents(results.events);
        setEventsMeta(results.meta);
        // console.log(results.events);
        // console.log(results.meta);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchCharlotteEvents();
  }, []);

  const formatDate = (datetime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(datetime).toLocaleString("en-US", options);
  };

  return (
    <>
      <div className="container">
        <iframe
          style={{
            display: "block",
            height: "1200px",
            width: "100%",
            overflowX: "hidden",
          }}
          src="https://seatgeek.com/cities/charlotte/"
        ></iframe>
      </div>
    </>
  );
};

export default CharlotteEvents;
