const {v4} = require("uuid");
const AWS = require("aws-sdk"); 


const addTodo = async (event) => {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {todo} = JSON.parse(event.body);
    const createdAt = new Date().toISOString();
    const id = v4();


    const newTodo = {
        id,
        todo,
        createdAt,
        completed:false
    }

try{
    dynamodb.put({
        TableName:"TodoTable",
        Item: newTodo 
    }).promise()
}
catch(e){}


  return {
    statusCode: 200,
    body: JSON.stringify(  newTodo  ),
  };
};

module.exports = {
    handler:addTodo
}