var express = require('express');
var router = express.Router();
const user = 'Terrell Scott'
const favMovies = [
  'Lion King', 'Spider-Man NWH', 'camp rock'
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
 });


router.get('/myname', function (req, res, next){
  res.json(user)
});

router.get('/myfavoritemovies', function(req, res, next){
  res.json(favMovies)
}  )

module.exports = router;
