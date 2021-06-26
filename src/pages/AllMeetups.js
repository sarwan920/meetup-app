import React from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage() {
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList></MeetupList>
      {/* <MeetupList meetups={DUMMY_DATA}></MeetupList> */}
    </div>
  );
}

export default AllMeetupsPage;
