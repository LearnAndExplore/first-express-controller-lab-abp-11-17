var SiteController = {
  'Index':function(req,resp){resp.render('site/index')},
  'About':function(){return 1},
  'Contact':function(){return 2}
}

// Sitecontroller.prototype.Index = function

//   }
//   About(){
//
//   }
//   Contact(){
//
//   }
// }
//  Index(){
//     return ("Do sth Index")
//   }
//   About(){
//     return ("Do sth About")
//   }
//   Contact(){
//     return ("Do sth Contact")
//   }
//
// }
module.exports = SiteController
