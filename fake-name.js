var fs = require('fs');

fs.readFile(__dirname +'/name.txt',function(err,data){
  if(err){
    console.log("There is an error");
    return;
  }
    var names = data.toString().split('\n');
    var name = names[Math.floor(Math.random() * names.length)];
    console.log(name);
});
