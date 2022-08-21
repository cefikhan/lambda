const AWS = require("aws-sdk"); 


const fetchTodo = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
 
    const {id} = event.pathParameters


let todos;


try{
  const results = await dynamodb.get({TableName:"TodoTable",
key:{id}
}).promise()

  todos = results.Item
}
catch(e){}


  return {
    statusCode: 200,
    body: JSON.stringify(  todos  ),
  };
};

module.exports = {
    handler:fetchTodo
}