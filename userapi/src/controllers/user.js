const client = require('../dbClient')

module.exports = {
  create: (user, callback) => {
    // Check parameters
    if(!user.username)
      return callback(new Error("Wrong user parameters"), null)
    // Create User schema
    const userObj = {
      firstname: user.firstname,
      lastname: user.lastname,
    }
    // Check if user already exists
    client.hgetall(user.username,(err,res) => {
      if(err) return callback(err,null);
      if(!res){
        // Save to DB
        client.hmset(user.username, userObj, (err, res) => {
          if (err) return callback(err, null);
          return callback(null, res); // Return callback
        });
      }
      else {
        return callback(new Error("User already exists"), null);
      }
    });
  },
  get: (username, callback) => {
    // TODO create this method
    if(!username)
      return callback(new Error("Wrong username parameter"), null);
    
      client.hgetall(username,(err,res)=>{
        if(err) return callback(err,null);
        if(res) 
          callback(null,res);
        else
          callback(new Error("No user with username: "+username),null);
      });

  },
  update: (username, modification, callback) => {
    if(!username)
      return callback(new Error("Wrong username parameter"), null);

    const keys = Object.keys(modification);

    if(keys.some( key => key.match("username")) && !modification.username.match(username))
      return callback(new Error("You are not allowed to modify the username"));

    client.hgetall(username,(err,res)=>{
      if(err) return callback(err,null);
      if(!res) 
        return callback(new Error("No user with username: "+username),null);
      else
      {
        keys.map(key => {
          res[key] = modification[key];
        });
        client.hmset(username,res, (err,res)=>{
          if(err) return callback(err,null);
          return callback(null,res);
        });
      }
    });
  },
  delete: (username, callback) => {
    if(!username)
      return callback(new Error("Wrong username parameter"), null)
    
      client.del(username,(err,res) => {
        if(!res) return callback(new Error("User doesn't exist"),null);
        return callback(null,res);
      })
  }
};
