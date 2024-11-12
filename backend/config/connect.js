const mongoose = require("mongoose");

const connectionOfDb = () => {
  mongoose
    .connect('mongodb+srv://monicag:MOWNICA123@cluster0.bbq2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      throw new Error(`Could not connect to MongoDB: ${err}`);
    });
};

module.exports = connectionOfDb;
