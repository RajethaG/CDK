import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep} from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class AwscicdpipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      const pipeline=  new CodePipeline(this, 'TestPipeline', {
        pipelineName: 'testPipeline',
        synth: new ShellStep('Synth',{
          input :CodePipelineSource.gitHub('RajethaG/CDK','main'),
          commands:[
            'npm ci',
            'npm run build',
            'npx cdk synth'
          ]
          
        })
      })
  }
}
