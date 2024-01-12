const express= require('express');
const cors= require('cors'); //CORS//
const bodyParse= require('body-parser'); //Body Parse//

//Global Scope//
const app= express();
app.options('/users', cors())
// app.use(cors());
// app.use(bodyParse.json());

// const student= [
//     {name: 'Ridhan', studentId: '0'}, 
//     {name: 'Tasnim', studentId: '1'},
//     {name: 'Rumman', studentId: '2'} 
// ]

// Get Request
app.get('/', (req, res)=>{
    res.send('Hello, Welcome to Personal Express')
});

app.get('/personal', (req, res)=>{
    const name= {first: 'Ridhan',
    last: 'Alam',
    ID: 183014034
    }
    res.send(name)
});

app.get('/student/:studentId', cors(), (req, res)=>{
    const student= [
        {name: 'Ridhan', studentId: '0'}, 
        {name: 'Tasnim', studentId: '1'},
        {name: 'Rumman', studentId: '2'}
    ]
    console.log(req.query);
    const id= req.params.studentId;
    const details= student[id].name; 
    res.send({name: details, id})
});

//Post Request
app.post('/users', bodyParse.json(), cors(), (req, res)=>{
   const user=req.body;
   user.id= 69;
   console.log(req.body);
   res.send(user)
})

app.listen(3333, console.log('Listening on 3333 Port'));