export function removePropertiesFromObject<T>(obj: T, properties: string[]): T {
  const newObj = { ...obj };
  properties.forEach((prop) => delete newObj[prop]);
  return newObj;
}
