import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { validateEmail } from "../../utils/helpers";
import SectionTitle from "../common/SectionTitle";
import { Button } from "@mui/material";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section id="contact">
      <SectionTitle title="Contact Me" description={"I will always be happy to meet new people"} />
      <form id="contact-form" onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              error={false}
              id="name"
              label="Name"
              defaultValue={name}
              onBlur={handleChange}
              //  helperText="Incorrect entry."
            />
            <TextField
              error={false}
              id="email"
              label="Email"
              defaultValue={email}
              onBlur={handleChange}
              //  helperText="Incorrect entry."
            />
            <div style={{ width: "100%"  }}>
              <TextField
                error={false}
                fullWidth
                id="message"
                label="Message"
                defaultValue={message}
                maxRows={10}
                rows={6}
                multiline
                onBlur={handleChange}
                //  helperText="Incorrect entry."
              />
            </div>
            <div style={{marginLeft:'10px'}}>

            <Button variant="contained"> Submit</Button>
            </div>
          </div>
        </Box>
      </form>
    </section>
  );
}

export default ContactForm;
