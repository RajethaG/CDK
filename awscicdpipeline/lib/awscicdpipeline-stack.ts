import * as cdk from 'aws-cdk-lib';
import { CodePipeline } from 'aws-cdk-lib/aws-events-targets';
import { CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwscicdpipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'TestPipeline', {
      pipelineName: 'TestPipeline',
      synth: new ShellStep('Synth',{
        input: CodePipelineSource.gitHub('',''),
        commands:[
          'npm ci',
          'npm run build',
          'npx cdk synth'
        ]
      })

    })
  }
}
