import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

import { useQuery } from "@apollo/client";

import { GET_MEETUPS } from "../../app_client/client";

import { Spinner } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";

function MeetupList() {
  // const getMeetups = useQuery(GET_MEETUPS);
  const { data, loading } = useQuery(GET_MEETUPS);
  // console.log(getMeetups.data);

  if (loading) {
    return (
      <Center>
        {" "}
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <ul className={classes.list}>
      {data.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.meetup_id}
          id={meetup.meetup_id}
          image={meetup.meetup_image}
          title={meetup.meetup_title}
          address={meetup.meetup_address}
          description={meetup.meetup_description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
