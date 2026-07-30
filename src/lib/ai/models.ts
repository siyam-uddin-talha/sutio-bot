// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gpt-5.4-mini',
    label: 'GPT-5.4 mini',
    apiIdentifier: 'gpt-5.4-mini',
    description: 'Latest mini model — fast, cost-efficient, actively supported',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-5.4-mini';
