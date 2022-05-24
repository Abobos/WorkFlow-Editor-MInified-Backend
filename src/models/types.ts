export interface queryParamsI {
  column: string;
  condition: string;
}

export interface queryParamsII {
  column: string;
  values: string;
}

export interface queryParamsIII extends queryParamsI {
  limit?: string;
  offset?: string;
  orderBy?: string;
}
