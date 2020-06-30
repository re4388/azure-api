module.exports = function (context, req) {

  if(context.bindings.qa){
    let data =  {
      "id": qa.id,
      "username":qa.username,
      "keyowrd": qa.keyowrd,
      "quesiton":qa.quesiton,
      "number_of_paper":qa.number_of_paper
    };
    context.res = {
          body: JSON.stringify(data)
          headers: {
          'Content-Type': 'application/json'
          }
    }
  } else {
      context.res = {
          status: 404,
          body : JSON.stringify("No bookmarks found"),
          headers: {
          'Content-Type': 'application/json'
          }
      };
  }


  context.done();


};
