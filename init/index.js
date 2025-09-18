const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("conected to DB");
}).catch((err) =>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '68bd2669ac83b2fb95c1de3f'}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};
initDB();

