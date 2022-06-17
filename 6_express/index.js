const http = require('http');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("Home Page");
//         res.end();
//     }
//     if (req.url === '/api/node') {
//         res.write(JSON.stringify(["http", "Event"]));
//         res.end();
//     }
// });

// server.listen(3000);

// writing above jargon code in express

// working with joi lib
// require('joi') return a class
// that's why the J is capital

const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/api/data', (req, res) => {
    res.send(JSON.stringify(["Node JS", "PHP", "JAVA"]));
});


// Read Route parameter

app.get('/api/courses/:id/:name', (req, res) => {
    res.send(req.query);
});

// Handling the HTTP GET Req
const courses = [
    {
        id: 1,
        title: 'A'
    },
    {
        id: 2,
        title: 'B'
    },
    {
        id: 3,
        title: 'C'
    }
];

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("Course not found");
    res.send(course);
})

// Handling HTTP POST req

app.post('/api/courses/', (req, res) => {
    // using joi
    const schema = {
        name: Joi.string().min(3).required(),
    };

    const result = Joi.validate(req.body, schema);

    // input validation check 1
    // if (!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send("Name must be include at least 3 character");
    //     return;
    // }

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        // if the name is short or invalid 
        // then we do some input validation
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
})

// Handling HTTP PUT req


app.listen(3000, () => console.log("Listening on port 3000"));


//  end of line
//  git config --global user.name 
//  git config --global user.email
//  git config --global core.editor "code --wait"
//  omit --global to set settings for this repo only