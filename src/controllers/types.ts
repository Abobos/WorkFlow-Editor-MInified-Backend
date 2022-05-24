export class Workflow {
  name: string;
  version?: number;
  scope: string;
  definitions: Definition[];
  apparatus: string[];
  procedures: Procedure[];
}

class Procedure {
  step: string;
  substeps?: string[];
}

class Definition {
  name: string;
  description: string;
}
