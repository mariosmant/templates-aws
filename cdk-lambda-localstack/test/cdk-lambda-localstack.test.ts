import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkLambdaLocalstackStack, CdkLambdaLocalstackStackProps } from '../lib/cdk-lambda-localstack-stack';

test('Lambda Created', () => {
  const app = new cdk.App();

  // Define stack properties, including the lambdaFolderPath
  const stackProps: CdkLambdaLocalstackStackProps = {
    lambdaFolderPath: '../code/lambda', // Update this path as needed
  };

  // WHEN
  const stack = new CdkLambdaLocalstackStack(app, 'MyTestStack', stackProps);
  
  // THEN
  const template = Template.fromStack(stack);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'hello.handler',
    Runtime: 'nodejs18.x',
  });
});
