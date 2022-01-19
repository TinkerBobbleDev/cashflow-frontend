import React, { useState } from "react";
import {
  Paper,
  Card,
  Container,
  Box,
  Typography,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Button,
  Grid,
} from "@mui/material";
import GoalDate from "./goalDate";

export default function GoalCmp(props) {
  const [completed, isCompleted] = useState(false);
  console.log(props.date);
  return (
    <Paper>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ display: "flex" }}
      >
        <Grid item xs={3}>
          <Typography>{props.setDate} </Typography>
        </Grid>
        <Grid item xs={7}>
          <Grid container sx={{ display: "block" }}>
            <Grid item xs={12}>
              <Typography>{props.title}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Amount : {props.goal_amt}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Amount : {props.saved_amt}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{props.desc}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography></Typography>={props.completeDate}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel value={completed} control={<Radio />} label=" " />
        </Grid>
      </Grid>
    </Paper>
  );
}
