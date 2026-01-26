const mongoose = require("mongoose");

const connectDb = async() => {
     try{
        const res = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected");
    }catch(e){
        console.log(e);
    }
}
    
connectDb();
    