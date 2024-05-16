import express from 'express';
const app= express();
app.get('/',(req,res)=>{
    res.send('Server is ready');
});
//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'This is a joke 1'
        },
        {
            id:2,
            title:'A joke',
            content:'This is a joke 2'
        },
        {
            id:3,
            title:'A joke',
            content:'This is a joke 3'
        },
        {
            id:4,
            title:'A joke',
            content:'This is a joke 4'
        },
        {
            id:5,
            title:'A joke',
            content:'This is a joke 5'
        },
        {
            id:6,
            title:'A joke',
            content:'This is a joke 6'
        },
    ];
    res.send(jokes);
})

const port= process.env.PORT ||4000;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});