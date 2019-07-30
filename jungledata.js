const db = require('./models');

db.Jobs.create({
    category: "Manual Labor",
    pay: 10 ,
    address: "12095 sw 18 st",
    length: '2 hours',
    title: "Babysitting",
    description: "Take care of my child",
    userId: 1 ,
    avatar: "https://campbell.armymwr.com/application/files/4115/2045/5599/FC-MST-Babysitting-Class.jpg"
});

db.Jobs.create({
    category: "Manual Labor",
    pay: 1 ,
    address: "123 Sesame Street",
    length: '15-30 Minutes',
    title: "Washing Car",
    description: "Just clean the outside of my car.",
    userId: 2 ,
    avatar: "https://www.coughlincars.com/static/dealer-11391/car-wash-graphic.png"
});

db.Jobs.create({
    category: "Manual Labor",
    pay: 25 ,
    address: "123 Abc Street",
    length: '45 minutes to an hour',
    title: "Cutting Grass and Weed Wacking",
    description: "Just mow my yard front and back and then use a weedwacker for ",
    userId: 3 ,
    avatar: "https://lh4.googleusercontent.com/LdLZYIysBC6s6owxtbkfAM73FmGn2XjjYOThVHYFNkTE2yQ0k3rLvk38KDOb3XzMkohmlSTFo9G_0825o48yILjHF0PO4Au9cceeYsX_JMxwFBk2jVvOJSvREHG-ePaPWwEHIHi0"
});

db.Jobs.create({
    category: "Manual Labor",
    pay: 40 ,
    address: "FSU Library",
    length: 'As long as it takes',
    title: "Finish my essay",
    description: "Has to be atleast 3 pages long and has to be about Economic Services",
    userId: 4 ,
    avatar: "https://www.road2college.com/wp-content/uploads/2014/12/essay-edits.jpg"
});

db.Jobs.create({
    category: "Manual Labor ",
    pay: 5 ,
    address: " 772 Bam Bam Drive",
    length: '15 minutes',
    title: " Changing Light Bulb",
    description: "I have a light bulb i'm to short to change  it",
    userId: 5 ,
    avatar: "https://campbell.armymwr.com/application/files/4115/2045/5599/FC-MST-Babysitting-Class.jpg"
});

// db.Jobs.create({
//     category: "manual labol",
//     pay:6 ,
//     address: "12095 sw 18 st",
//     length: '2 hours',
//     title: "babysitting",
//     description: "some description",
//     userId: 1 ,
//     avatar: "https://campbell.armymwr.com/application/files/4115/2045/5599/FC-MST-Babysitting-Class.jpg"
// });

// db.Jobs.create({
//     category: "manual labol",
//     pay:6 ,
//     address: "12095 sw 18 st",
//     length: '2 hours',
//     title: "babysitting",
//     description: "some description",
//     userId: 1 ,
//     avatar: "https://campbell.armymwr.com/application/files/4115/2045/5599/FC-MST-Babysitting-Class.jpg"
// });