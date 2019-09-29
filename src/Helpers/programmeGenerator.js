const axios = require("axios");
const _ = require("lodash");
const moment = require("moment");

async function generateProgrammes() {
  try {
    const days = []; //screening dates and hours
    const moviesIds = [];
    const howManyDays = 14;
    const howManyScreenings = 5;
    const times = [];
    const date = moment().format("YYYY-MM-DD"); //start date
    const time = moment("09:00:00", "HH:mm:ss"); //start time

    const movies = await axios.get("http://localhost:3001/api/movies");
    const moviesArr = movies.data;

    moviesArr.forEach(element => {
      moviesIds.push(element._id);
    });

    for (let i = 0; i < howManyScreenings; i++) {
      times.push(
        moment(time)
          .add(i * 3, "h")
          .format("HH:mm:ss")
      );
    }

    for (let i = 0; i < howManyDays; i++) {
      for (let j = 0; j < howManyScreenings; j++) {
        days.push(moment(`${date}T${times[j]}`).add(i, "day"));
      }
    }

    days.forEach(day => {
      console.log(day.format(`YYYY-MM-DDTHH:mm:ss`));
      console.log(_.sample(moviesIds));

      axios
        .post("http://localhost:3001/api/programmes", {
          movie_id: `${_.sample(moviesIds)}`,
          time: `${day.format(`YYYY-MM-DDTHH:mm:ss`)}`
        })
        .then(function(response) {
          //   console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  } catch (err) {
    console.log(err);
  }
}

generateProgrammes();
