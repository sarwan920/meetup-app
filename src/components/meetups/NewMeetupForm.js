import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import { Button } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

import { useMutation } from "@apollo/client";
import { ADD_MEETUP, GET_MEETUPS } from "../../app_client/client";

import Card from "../UI/Card";

function NewMeetupForm() {
  const toast = useToast();

  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const [addMeetup, { loading }] = useMutation(ADD_MEETUP);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = addressInputRef.current.value;

    addMeetup({
      variables: {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription,
      },
      refetchQueries: [{ query: GET_MEETUPS }],
    }).then(() => {
      document.getElementById("meetup-form").reset();
      toast({
        title: "Meetup Saved Successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
        variant:"top-accent"
      });
    });
  };

  return (
    <Card>
      <form id="meetup-form" className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <Button
            onClick={submitHandler}
            isLoading={loading}
            colorScheme="blue"
          >
            Add Meetup
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
