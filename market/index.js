require('dotenv').config()

const server = require('./app');
const PORT = process.env.PORT || 8001
server.listen(PORT, () => console.log(`server listening on ${PORT}`))