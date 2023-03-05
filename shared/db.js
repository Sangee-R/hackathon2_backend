const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dbConnect = async () => {
  try {
    await mongoose.connect(
    
     "mongodb+srv://sangeetha:sangee1997@sangeetha.dmujqlq.mongodb.net/bookmovietickets?retryWrites=true&w=majority",
     
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      }
    );
    console.log("DB Connected");
  } catch (e) {
    console.log(e.message, "error in connecting db");
  }
};

const ticketSchema = new mongoose.Schema({
  
  movie: { type: String },
    slot: { type: String },
    seats: {
        A1: { type: Number },
        A2: { type: Number },
        A3: { type: Number },
        A4: { type: Number },
        D1: { type: Number },
        D2: { type: Number },
       
        
    }
});

const tickets = mongoose.model("tickets", ticketSchema, "tickets");



module.exports = { dbConnect, tickets };
