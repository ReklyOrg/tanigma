export function formatInTriplets(value: string): string {
  const clean = value.replaceAll(/\s+/g, '');
  return clean.match(/.{1,3}/g)?.join(' ') ?? '';
}
