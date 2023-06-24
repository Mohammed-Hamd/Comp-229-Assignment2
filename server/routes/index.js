var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index'); 

/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage) ;


/* GET project page. */
router.get('/project',indexController.displayProjectPage );

/* GET service page. */
router.get('/service',indexController.displayServicePage );

/* GET contact me page. */
router.get('/contact',indexController.displayContactPage) ;

/* GET Route for the displaying the login page */
router.get('/login',indexController.displayLoginPage);

/* POST Route for processing the login page */
router.post('/login',indexController.processLoginPage);

/* GET Route for the displaying the register page */
router.get('/register',indexController.displayRegisterPage);

/* POST Route for processing the register page */
router.post('/register',indexController.processRegisterPage);

/* GET to perform User Logout */
router.get('/logout',indexController.performLogout);




module.exports = router;
