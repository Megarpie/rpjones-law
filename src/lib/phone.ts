const MAX_NATIONAL_DIGITS = 10;

export function phoneDigits(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.length === 11 && digits.startsWith("1")) {
    digits = digits.slice(1);
  }
  return digits;
}

export function formatUsPhone(value: string) {
  const digits = phoneDigits(value).slice(0, MAX_NATIONAL_DIGITS);
  const area = digits.slice(0, 3);
  const exchange = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length === 0) return "";
  if (digits.length < 4) return area;
  if (digits.length < 7) return `(${area}) ${exchange}`;
  return `(${area}) ${exchange}-${line}`;
}

export function isValidUsPhone(value: string) {
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(phoneDigits(value));
}
