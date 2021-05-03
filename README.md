# MsCotas.Lambda.IntegraCotas

This function is responsible for publishing quotas every 30 minutes for users of the system.

## Use Cases

- Publish quotas for system users.

## Events

- Schedule (EventBridge)

## Deploy

In order to deploy the you cron job with lambda simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
Serverless: Packaging service...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading service .zip file to S3 (1.47 KB)...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
..............
Serverless: Stack update finished...

Service Information
service: mscotaslambdaintegracotas-lambda
stage: dev
region: us-east-1
api keys:
  None
endpoints:
  None
functions:
  mscotaslambdaintegracotas-lambda: arn:aws:lambda:us-east-1:377024778620:function:mscotaslambdaintegracotas-lambda
  mscotaslambdaintegracotas: arn:aws:lambda:us-east-1:377024778620:function:mscotaslambdaintegracotas
```

## Usage

You can now invoke the Lambda directly and even see the resulting log via

```bash
serverless invoke --function currentTime --log
```

The expected result should be similar to:

```bash
START RequestId: eddf3fbe0a-11e6-8d73bdd3836e44 Version: $LATEST
Invalid date	2009T12:28:03.214Z	eddf3fbe0a-11e6-8d73bdd3836e44	Your cron function mscotaslambdaintegracotas-lambda ran at 12:28:03.214844
END RequestId: eddf3fbe0a-11e6-8d73bdd3836e44
REPORT RequestId: eddf3fbe0a-11e6-8d73bdd3836e44	Duration: 0.40 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 16 MB

START RequestId: af2da2ba-be0b-11e6-a2e2-05f86a84b0e4 Version: $LATEST
Invalid date	2009T12:33:27.715Z	af2da2ba-be0b-11e6-a2e2-05f86a84b0e4	Your cron function mscotaslambdaintegracotas-lambda ran at 12:33:27.715374
END RequestId: af2da2ba-be0b-11e6-a2e2-05f86a84b0e4
REPORT RequestId: af2da2ba-be0b-11e6-a2e2-05f86a84b0e4	Duration: 0.32 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 15 MB
```

## Scaling

By default, AWS Lambda limits the total concurrent executions across all functions within a given region to 100. The default limit is a safety limit that protects you from costs due to potential runaway or recursive functions during initial development and testing. To increase this limit above the default, follow the steps in [To request a limit increase for concurrent executions](http://docs.aws.amazon.com/lambda/latest/dg/concurrent-executions.html#increase-concurrent-executions-limit).
