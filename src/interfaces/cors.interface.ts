export type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[];

export type OriginCallback = (
  err: Error | null,
  origin?: StaticOrigin,
) => void;

