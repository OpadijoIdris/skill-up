import app from "./app.js";
import { connect } from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

try{
    const conn = await connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`)

}catch(error){
    console.log(error);
    process.exit(1);
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`server currently running on PORT ${PORT}`)});
