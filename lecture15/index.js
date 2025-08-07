const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.send('Hello from Express Server');
});

app.post('/adduser', (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
lecture15
        let newUser = {
            email,
            password
        };

        console.log(email);
        console.log(password);

        res.json({
            success: true,
            data: newUser,
            message: "User added successfully"
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
