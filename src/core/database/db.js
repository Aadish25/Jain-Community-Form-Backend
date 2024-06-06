const mongoose = require('mongoose');   
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
});
mongoose.connection.on('error', (error) => {
    console.log(error)
})

mongoose.connection.once('connected', () => {
    console.log('Database Connected');
})
exports.mongoose = mongoose;

