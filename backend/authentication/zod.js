const express = require("express");
const app = express();
app.listen(3000);
const zod = require("zod");
app.use(express.json());

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
  })
  return schema.safeParse(obj);
}

app.post("/login", function (req, res) {
  const response = validateInput(req.body);
  if (!response.success) {
    res.json({
      msg: "Invalid inputs"
    })
    return;
  }
  res.json({
    msg: "Correct inputs yay !!!"
  })
})




