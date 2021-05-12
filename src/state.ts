interface Output {
  value: any
  type: string
}

interface Outputs {
  [key: string]: Output
}

interface Resource {
  mode: string
  type: string
  name: string
  provider: string
  instances: any[]
}

export class State {
  private state: any;

  constructor (state: any) {
    this.state = state
  }

  public getVersion (): number {
    return this.state.version
  }

  public getTerraformVersion (): string {
    return this.state.terraform_version
  }

  public getSerial (): number {
    return this.state.serial
  }

  public getOutputs (): Outputs {
    return this.state.outputs
  }

  public getOutput (key: string): any {
    return this.state.outputs[key]?.value
  }

  public getResources (): Resource[] {
    return this.state.resources
  }

  public getState (): any {
    return this.state
  }
}
