import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/calculate-bmi", (req, res) => {
    const { height, weight } = req.body;

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

    res.json({ bmi });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
