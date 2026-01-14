export function formatInTriplets(value: string): string {
  const clean = value.replaceAll(/\s+/g, '');
  return clean.match(/.{1,3}/g)?.join(' ') ?? '';
}

export function formatToEuro(value: number): string {
  return new Intl.NumberFormat('pt-PT', { currency: 'EUR', style: 'currency' }).format(value);
}
