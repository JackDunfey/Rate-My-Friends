const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/static", express.static(`${__dirname}/public`));
app.set('view engine', 'pug');
app.get("/", (req,res)=>{
    res.render("index");
});
app.get("/rate/:user_id", (req,res)=>{
    if(req.param.user_id)
        return res.sendStatus(404);
    res.render("rating", {
        id: req.params.user_id
    });
});
app.listen(80);