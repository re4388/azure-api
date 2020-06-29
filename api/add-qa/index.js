module.exports = function (context, req) {
	// Azure Cosmos DB 輸入繫結會嘗試使用我們收到的 id 來擷取文件或書籤。
    //如果找到項目，則會設定 qa 物件。
    let qa = context.bindings.qa
    // if(qa) 條件會檢查是否找到項目
    if(qa){
          context.res = {
              status: 422,
              body : JSON.stringify("qa already exists."),
              headers: {
              'Content-Type': 'application/json'
              }
          }
        } else {
        // serilize
        let qaString = JSON.stringify({
            id: req.body.id,
            username: req.body.username,
            keyowrd: req.body.keyowrd,
            quesiton: req.body.quesiton,
            numberOfPaper: req.body.numberOfPaper
        });

        // Write to our comos db.
        context.bindings.newqa = qaString;
        // Push this bookmark onto our queue for further processing.
        context.bindings.newmessage = qaString;
        // Tell the user all is well.
        context.res = {
            status: 200,
            body : JSON.stringify("qa added!"),
            headers: {
            'Content-Type': 'application/json'
            }
        };
    }
    context.done();
};