import React, { useState, useEffect } from "react";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [eventsMeta, setEventsMeta] = useState({});

  useEffect(() => {
    const fetchEventsList = async () => {
      try {
        const data = await fetch(
          `https://api.seatgeek.com/2/events?geoip=true&client_id=MzUxNTA5MTl8MTY5MDI1MzI4MS44NTI1NDM4`
        );
        const results = await data.json();
        setEvents(results.events);
        setEventsMeta(results.meta);
        console.log(results.events);
        console.log(results.meta);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchEventsList();
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
        <div className="row">
          {events.map((each) => (
            <a href={each.url} className="col-lg-4 mb-4">
              <div className="card">
                {each.performers.map((perf) => (
                  <img src={perf.image} alt={each.title} />
                ))}
                <div className="card-body">
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {each.type}

                    <h6>Date / Time: {formatDate(each.datetime_local)}</h6>
                    <p>
                      Venue Name: {each.venue.name}
                      <br />
                      Address:
                      <br />
                      {each.venue.address}
                      <br /> {each.venue.extended_address}
                    </p>
                    {each.performers.map((someone) => (
                      <h6>Performer Name: {someone.name}</h6>
                    ))}
                    <h6>
                      Need Tickets:{" "}
                      <a href={each.venue.url} target="_blank">
                        Buy Tickets
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventList;
