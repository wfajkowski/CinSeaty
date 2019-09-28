require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const mongoDbPass = process.env.DB_PASS;
const movies = require("../routes/movies");
const programmes = require("../routes/programmes");
const halls = require("../routes/halls");
const reservations = require("../routes/reservations");
const tickets = require("../routes/tickets");

mongoose
  .connect(
    `mongodb+srv://superadmin:${mongoDbPass}@cinseatydb-2naqv.mongodb.net/cinseaty?retryWrites=true&w=majority`,
    {
      // added some options to work around errors in the server terminal
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => {
    console.log("Connected to MongoDB...");
    console.log("To exit press Ctrl+C");
  })
  .catch(err => console.error("Not connected!", err));

app.use(cors());
app.use(express.json());
app.use("/api/movies", movies);
app.use("/api/programmes", programmes);
app.use("/api/halls", halls);
app.use("/api/reservations", reservations);
app.use("/api/tickets", tickets);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
