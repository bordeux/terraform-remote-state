# Terraform Remote State

Micro library to fetch terraform state (right now only from S3 bucket)

## Installing

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install @bordeux/terraform-remote-state

or `yarn`:

    $ yarn add @bordeux/terraform-remote-state

## Examples

The following program will read a Terraform state file stored in S3 from staging workspace:

```typescript
import { s3RemoteState } from "@bordeux/terraform-remote-state";

const state = await s3RemoteState("staging", {
    bucket: "pulumi-terraform-state-test",
    key: "test/terraform.tfstate",
    region: "us-west-2",
    profile: 'terraform-state'
});

const vpcId= state.getOutput("vpc_id");
```