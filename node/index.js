// const http = require('http');
// const fs = require('fs');

// const myserver = http.createServer((req, res) => {

//     if (req.url == '/') {

//         res.writeHead(200, { 'Content-Type': 'text/html' });

//         res.end(`
//             <html>
//             <head>
//                 <style>
//                     body{
//                         text-align:center;
//                         font-family: Arial;
//                     }

//                     img{
//                         width:300px;           /* Small size */
//                         border:5px solid black; /* Border */
//                         border-radius:10px;
//                         margin-top:50px;
//                     }
//                 </style>
//             </head>

//             <body>
//                 <h2>ABES Engineering College</h2>
//                 <img src="/image"/>
//             </body>
//             </html>
//         `);
//     }

//     else if (req.url == '/image') {

//         fs.readFile('abes1.webp', (err, data) => {
//             if (err) {
//                 res.end("Image not found");
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'image/webp' });
//                 res.end(data);
//             }
//         });

//     }

//     else if (req.url == '/about') {
//         res.end("We are student");
//     }

//     else if (req.url == '/class') {
//         res.end("IT-A");
//     }

//     else {
//         res.end("404 page is not found");
//     }

// });

// myserver.listen(8000, () => console.log("server is run"));



// const fs=require('fs')

// fs.writeFile("./IT-A.txt","We are student of IT-A")
// // fs.writeFileSync("./Abes.txt","Abes provive B.Tech & M.tech")
// fs.readFile("./CSE.txt","utf-8",(err,result) => {

//     if(err){
//         console.log("Error",err)
//     }
//     else{
//         console.log(result)
//     }

//  })

// const fs=require('fs');
// fs.cpSync("IT-A.txt","A.txt");

const fs=require('fs')
fs.appendFileSync("./IT-A.txt",`and we are coder`)
