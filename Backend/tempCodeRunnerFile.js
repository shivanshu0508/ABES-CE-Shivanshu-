const express=require('express')
const app=express()
const port=8081;

app.get('/',(req,res)=>{
    res.send("this is my first server")
})

app.get('/about',(req,res)=>{
    const students= [
        {
            id:1,
            name:"shivanshu",
            class:"10"
        },
        {
            id:2,
            name:"sahil",
            class:"10"
        },
        {
            id:3,
            name:"sauram",
            class:"10"
        },
         {
            id:2,
            name:"sahil",
            class:"10"
        },
        {
            id:3,
            name:"sauram",
            class:"10"
        },

    ];
    res.json(students);
});

app.get('/Contact',(req,res)=>{
    res.send("<h1>Contact:8957492231</h1>")
})

app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`);
})
