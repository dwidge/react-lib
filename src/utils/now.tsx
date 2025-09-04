export type Seconds = number;
export const now = (): Seconds => (Date.now() / 1000) | 0;
