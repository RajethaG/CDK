#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwscicdpipelineStack } from '../lib/awscicdpipeline-stack';

const app = new cdk.App();
new AwscicdpipelineStack(app, 'AwscicdpipelineStack', {
  env:{
    account:'330967641698',
    region:'us-east-1'
  }
});

app.synth()