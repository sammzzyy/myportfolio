var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

// About page
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me' });
});

// Projects page
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'My Projects' });
});

// Contact page
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' });
});

// Handle contact form submission
router.post('/contact', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var subject = req.body.subject;
    var message = req.body.message;

    res.render('contact', {
        title: 'Contact Me',
        successMessage: 'Thank you! Your message has been submitted successfully.'
    });
});

module.exports = router;