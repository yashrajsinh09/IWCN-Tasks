const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const PORT = 3000
app.use(cors());
app.use(express.json());

app.post("/task3", (req, res) => {
  const url = "https://chimpu.xyz/api/post.php";
  const { phonenumber } = req.body;
  console.log(phonenumber);
  axios
    .post(url, { phonenumber })
    .then((response) => {
      return res
        .status(200)
        .send({
          status: true,
          headerData: response.headers.phoneorigen,
          date: response.headers.date,
          data: response.data.msg,
        }); //
    })
    .catch((error) => {
      return res.status(500).send({ error: error });
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
