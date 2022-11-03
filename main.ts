import {Construct} from "constructs";
import {App, TerraformStack} from "cdktf";
import {AWSProviderConfigs} from "construct-forge-aws/lib/constructs"
import {AvailableRegion} from "construct-forge-aws/lib/constants"
import {s3Bucket} from "@cdktf/provider-aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new AWSProviderConfigs(this, 'CustomAWSProvider', {
      stackName: 'practice-forge-test-stack',
      account: {
        accountId: '109158437051',
        name: 'sandbox',
        deployProfile: 'sandbox',
        majorRegion: AvailableRegion.US_EAST_1,
        minorRegion: AvailableRegion.US_WEST_2
      },
      backendProfile: 'storage',
      stateBucket: 'construct-forge-cdktf'
    })


    new s3Bucket.S3Bucket(this, 'TestBucket', {
      bucket: 'practice-forge-test-bucket'
    })
  }
}

const app = new App();
new MyStack(app, "practice-forge");
app.synth();
