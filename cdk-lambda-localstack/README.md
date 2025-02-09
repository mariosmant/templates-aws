# Requirements
- NodeJS 22.x LTS (for CDK - tested v22.13.1)
- NodeJS 18.x (to test Lambda code)
- AWS CLI v2 (aws-cli/2.24.0)
- LocalStack CLI 4.0.3

# General Info

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.
The `cdk.context.json` adds context configuration.

Dummy values are used for AWS Account ID and AWS region in the app.
AWS Account ID: 123456789012
AWS region: us-east-1

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## Environment variables
```
export AWS_ACCESS_KEY_ID=123456789012
export AWS_SECRET_ACCESS_KEY=test
export AWS_REGION=us-east-1
export AWS_ENDPOINT_URL=http://s3.localhost:4566
```

## Update /etc/hosts
```
127.0.0.1 cdk-hnb659fds-assets-123456789012-us-east-1.s3.localhost
127.0.0.1 s3.localhost
```

Note that the `cdk-hnb659fds-assets-123456789012-us-east-1`  part is the bucket name, may differ from your setup, adapt as needed.

## Install AWS CDK CLI
```
npm install -g aws-cdk
```

## Install modules
```
npm install
```

## Start localstack
```
localstack start
```

## Bootstrap
In another terminal:
```
cdk bootstrap aws://123456789012/us-east-1 --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess
```

## Deploy
```
AWS_ENDPOINT_URL="http://s3.localhost:4566" cdk deploy --verbose
```

## Run function
### List functions first, to find the FunctionName.
aws --endpoint-url=http://s3.localhost:4566 lambda list-functions

### Run the function given the FunctionName.
aws --endpoint-url=http://s3.localhost:4566 lambda invoke --function-name <FunctionName> output.txt

### Output
Check the out in ```output.txt```.
