import { S3, SharedIniFileCredentials } from 'aws-sdk'
import { State } from './src/state'

export interface S3Backed {
  bucket: string
  key: string
  region: string
  profile: string
}

const s3RemoteState = async (workspace: string, backend: S3Backed): Promise<State> => {
  const credentials = new SharedIniFileCredentials({
    profile: backend.profile
  })
  const s3 = new S3({
    credentials: credentials
  })

  const object = await s3.getObject({
    Bucket: backend.bucket,
    Key: `env:/${workspace}/${backend.key}`
  }).promise()

  const data = JSON.parse(
    object.Body.toString()
  )

  return new State(data)
}

export { s3RemoteState }
