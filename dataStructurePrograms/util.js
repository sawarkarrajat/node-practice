/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports={
    writeFile(fileName,data){
        let fs = require('fs');
        /*
        * it is used to access the file
        */
        fs.writeFile(fileName, data, function (err) {
          if (err) {
            returnconsole.error(err.message);
          }
        });
    }
}