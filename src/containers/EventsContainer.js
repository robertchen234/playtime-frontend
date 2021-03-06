import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import EventCard from "../components/EventCard";

class EventsContainer extends Component {
  state = {};
  render() {
    return (
      <div className="main-column">
        <h2 className="center">All Events</h2>
        {this.props.events
          .filter(event => {
            return event.date
              .slice(0, 10)
              .split("-")
              .join("") >
              new Date().getFullYear().toString() + new Date().getMonth() <
              10
              ? "0" + new Date().getMonth().toString()
              : new Date().getMonth().toString() + new Date().getDate() < 10
              ? "0" + new Date().getDate().toString()
              : new Date().getDate().toString();
          })
          .sort(
            (a, b) =>
              b.date
                .slice(0, 10)
                .split("-")
                .join("") -
              a.date
                .slice(0, 10)
                .split("-")
                .join("")
          )
          .map(event => {
            return (
              <div key={event.id}>
                <EventCard event={event} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(EventsContainer);
