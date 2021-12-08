var express = require('express');
var router = express.Router();

var monk = require('monk');
const { render } = require('../app');
var db = monk('localhost:27017/hns');

var collection = db.get('items');

// /items
router.get('/', function(req, res, next) {
    // console.log(req.user);
    collection.find({}, function(err, items) {
        if (err) throw err;
        console.log(req);
        res.render('viewall_users', {results: items, user: req.user});
    })
});

// /items/id

router.get('/:id', function(req, res, next) {
  collection.findOne({ _id: req.params.id}, function(err, item){
      if (err) throw err;
      res.render('view', {item : item});
  });
});


router.post('/filter', function(req,res) {    
    console.log(req.body.search);    
    console.log(req.body.filter);    
    if(req.body.search == "" && req.body.filter == "All" ) {      
        collection.find({},function(err,items){        
            if (err) throw err;        
            res.render('viewall_users', {results: items, user: req.user})      }
            );    }   
             else if(req.body.filter == "All") {        
                 collection.find({},function(err, items){          
                     if (err) throw err;          
                     var result = []          
                     for(i=0;i<items.length;i++) {            
                         if(items[i].title.toLowerCase().includes(req.body.search.toLowerCase())){              
                             result.push(items[i])            
                            }          
                        }          
                        res.render('viewall_users', {results: result, user: req.user})      
                    });      
                }      else if(req.body.search == "") 
                {      collection.find({"category":req.body.filter},function(err,items){        
                    if (err) throw err;        
                    res.render('viewall_users', {results: items, user: req.user})      
                });    
            }          else {      
                collection.find({"category":req.body.filter},function(err,items){        
                    if (err) throw err;        
                    var result = []        
                    for(i=0;i<items.length;i++) {          
                        if(items[i].title.toLowerCase().includes(req.body.search.toLowerCase())){            
                            result.push(items[i])          
                        }         
                     }        
                     res.render('viewall_users', {results: result, user: req.user})      
                    });    
                }  
            });




module.exports = router;
