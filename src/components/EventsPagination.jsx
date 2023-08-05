import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const EventList = () => {
  const [geoEvents, setGeoEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9; // Number of events to display per page

  useEffect(() => {
    const fetchEventsGeoIp = async () => {
      try {
        const response2 = await fetch(
          `https://api.seatgeek.com/2/events?geoip=true&range=40mi&client_id=MzUxNTA5MTl8MTY5MDI1MzI4MS44NTI1NDM4&page=${currentPage}`
        );
        const data = await response2.json();
        setGeoEvents(data.events);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchEventsGeoIp();
  }, [currentPage]);

  // Helper function to handle pagination navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index of the last event to display on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = geoEvents.slice(indexOfFirstEvent, indexOfLastEvent);

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
      <div style={{ width: "70vw", margin: "0 auto" }}>
        {currentEvents ? (
          <>
            <div className="row d-flex justify-content-center">
              {currentEvents.map((each) => (
                <div
                  key={each.id}
                  className="card"
                  style={{
                    width: "18rem",
                    minHeight: "400px",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                    margin: "10px",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={each.performers[0].image}
                    alt={each.performers[0].short_name}
                  />
                  <div className="card-body">
                    <h6
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "capitalize",
                          marginRight: "10px",
                        }}
                      >
                        {each.performers[0].name} -
                      </span>
                      {each.taxonomies[0].name}
                    </h6>
                    <p
                      style={{
                        fontSize: "14px",
                        display: "flex",
                        flexDirection: "column",
                        color: "#222",
                      }}
                    >
                      <span>{formatDate(each.datetime_local)}</span>

                      <span>{each.venue.address}</span>

                      <span>{each.venue.extended_address}</span>

                      <span style={{ fontSize: "10px", marginBottom: "20px" }}>
                        {each.venue.slug}
                      </span>

                      <a
                        className="btn btn-primary"
                        href={each.venue.url}
                        target="_blank"
                      >
                        Buy Tickets
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination buttons */}
            <div className="container" style={{ marginTop: "45px" }}>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage - 1)}
                      >
                        Previous
                      </button>
                    </li>
                    {Array.from({
                      length: Math.ceil(geoEvents.length / eventsPerPage),
                    }).map((_, index) => (
                      <li
                        className={`page-item ${
                          currentPage === index + 1 ? "active" : ""
                        }`}
                        key={index + 1}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage ===
                        Math.ceil(geoEvents.length / eventsPerPage)
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Next
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <center>
            <Spinner />
          </center>
        )}
      </div>
    </>
  );
};

export default EventList;
