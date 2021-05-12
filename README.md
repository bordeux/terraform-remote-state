# Terraform Remote State

Micro library to fetch terraform state (right now only from S3 bucket)

## Installing

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

    $ npm install terraform-remote-state

or `yarn`:

    $ yarn add terraform-remote-state

## Examples

The following program will read a Terraform state file stored in S3 from staging workspace:

```typescript
const tf = require('terraform-remote-state')

const state = await tf.s3RemoteState("staging", {
    bucket: "pulumi-terraform-state-test",
    key: "test/terraform.tfstate",
    region: "us-west-2",
    profile: 'terraform-state'
});

const restApiId = state.getOutput("restapi_id");
```