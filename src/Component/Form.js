import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";

const Form = (props) => {
  const { setInput, setSubmit } = props;
  const initialFormState = { leftCode: "", rightCode: "" };
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setInput(form);
        setSubmit(true);
      }}
    >
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs>
          <TextField
            id="standard-basic"
            multiline
            label="Left Code"
            name="leftCode"
            value={form.leftCode || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            id="standard-basic"
            multiline
            label="Right Code"
            name="rightCode"
            value={form.rightCode || ""}
            onChange={handleInputChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <Button
            type="submit"
            size="small"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
