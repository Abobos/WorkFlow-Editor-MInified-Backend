export class WorkflowDto {
  name: string;
  version?: number;
  scope: string;
  definitions: Definition[];
  apparatus: string[];
  procedures: Procedure[];
}

export class Procedure {
  step: string;
  substeps?: string[];
}

export class Definition {
  name: string;
  description: string;
}
