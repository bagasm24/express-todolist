const express = require('express');
const app = express()
const allRoute = require("./routes")

const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(allRoute)

app.listen(PORT, () => {
    console.log("server berjalan di port " + PORT);
})

