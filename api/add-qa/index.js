module.exports = function (context, req) {
  // check if it exists
  if (context.bindings.qa) {
    context.res = {
      status: 422,
      body: JSON.stringify("qa already exists."),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    // serilize
    let qaString = JSON.stringify({
      id: req.body.id,
      username: req.body.username,
      keyowrd: req.body.keyowrd,
      quesiton: req.body.quesiton,
      numberOfPaper: req.body.numberOfPaper,
    });

    // Write to our comos db.
    context.bindings.newqa = qaString;
    // Push this bookmark onto our queue for further processing.
    context.bindings.newmessage = qaString;
    // Tell the user all is well.
    context.res = {
      status: 200,
      body: JSON.stringify("qa added!"),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
  context.done();
};
