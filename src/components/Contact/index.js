import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { validateEmail } from "../../utils/helpers";
import SectionTitle from "../common/SectionTitle";
import { Button } from "@mui/material";

function ContactForm() {
  const [state, handleSubmit] = useForm("xayvvkkg");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <section id="contact">
      <SectionTitle
        title="Contact Me"
        description={"I will always be happy to meet new people"}
      />
      <form onSubmit={handleSubmit} id="contact-form">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <div>
              <TextField
                error={false}
                id="email"
                type="email"
                name="email"
                label="Email"
                //  helperText="Incorrect entry."
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div style={{ width: "100%" }}>
              <TextField
                error={false}
                fullWidth
                name="message"
                type="message"
                id="message"
                label="Message"
                maxRows={10}
                rows={6}
                multiline
                //  helperText="Incorrect entry."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <Button
                variant="contained"
                type="submit"
                value="Send"
                disable={state.submitting}
              >
                {" "}
                Submit
              </Button>
            </div>
          </div>
        </Box>
      </form>
    </section>
  );
}

export default ContactForm;
