const AWS = require("aws-sdk"); 

const deleteTodo = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {id} = event.pathParameters

let todos;


try{


const results = await dynamodb.delete({TableName:"TodoTable",key:{id}}).promise()
  


  todos = results.Item
}
catch(e){}


  return {
    statusCode: 200,
    body: JSON.stringify(  todos  ),
  };
};

module.exports = {
    handler:deleteTodo
}