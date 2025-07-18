import mongoose from 'mongoose'

export default async function Connectdb () {
    const connection = await mongoose.connect(process.env.URL)
    if (connection) {
        console.log("Connection to DB Successful")
    }

    else {
        console.log("Failed to connect to DB")
    }
}