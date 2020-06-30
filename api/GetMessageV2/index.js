module.exports = async function (context, req) {
  if (req.query.name || (req.body && req.body.name)) {

    const data = "Hello " + (req.query.name || req.body.name)
    const dataString = JSON.stringify(data)
    context.res = {
      body: dataString,
      headers: {
        "Content-Type": "application/json",
      },
    };
  } else {
    context.res = {
      status: 400,
      body: JSON.stringify("Please pass a name on the query string or in the request body"),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }
};
