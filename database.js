const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://sarah123:PJQyKMwfeejsI4z6@cluster0.7wsqk.mongodb.net/"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
