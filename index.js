const express = require("express");
const app = express();

const cors = require('cors');

const port = process.env.PORT || 5000;




app.use(cors());

app.get("/" , (req , res)=>{
    res.send("Dragon is running");
});


const catagories = require("./data/catagories.json");
app.get("/catagories" , (req ,res)=>{
    res.send(catagories);
} )


const news = require("./data/news.json");
app.get("/news" , (req, res)=>{
    res.send(news);
})

app.get("/news/:id" , (req,res)=>{
    const id = req.params.id;
    const selectedNews = news.find(n=> n._id === id)
    res.send(selectedNews);
})


app.get("/catagories/:id" , (req, res)=>{
    const id = req.params.id;

    if(id == 0){
        res.send(news);
    }
    else{
        const catagoryWiseNews = news.filter(n=> n.category_id === id)
        res.send(catagoryWiseNews);
    }
})



app.listen(port , ()=>{
    console.log(`dragon api is running on ${port}`);
})
