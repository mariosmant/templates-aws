exports.handler = async function(event) {
    return {
        statusCode: 200,
        body: 'Hello, CDK with LocalStack! This is a NodeJS JavaScript Lambda',
    };
};
