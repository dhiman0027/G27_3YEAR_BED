const express = require('express');
const {read, write} = require("../lecture7/IO/io")
const app = express();
const PORT = 3000;
app.use(express.json());
app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    async function writing() {
        try {
            await write("./Formdata.txt", JSON.stringify(req.body));
            console.log("Data written to file");

            res.json({
                message: "Data received and saved successfully!",
                name,
                age
            });
        } catch (err) {
            console.error("Error writing to file", err);
        }
        
    }

    writing();
});

app.listen(PORT, () => {
    console.log("Server is started on port", PORT);
});
