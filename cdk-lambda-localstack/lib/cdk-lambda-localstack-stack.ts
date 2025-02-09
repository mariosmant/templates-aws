import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface CdkLambdaLocalstackStackProps extends cdk.StackProps {
  lambdaFolderPath: string;
}

export class CdkLambdaLocalstackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: CdkLambdaLocalstackStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Define the Lambda functions
    const helloNodeJsJavaScriptLambda = new lambda.Function(this, 'HelloNodeJsJavaScriptLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'helloJavaScript.handler',
      code: lambda.Code.fromAsset(path.join(props.lambdaFolderPath, 'nodejs-javascript')),
    });
    
  }
}
