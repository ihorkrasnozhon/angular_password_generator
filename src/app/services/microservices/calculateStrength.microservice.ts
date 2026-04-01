export function calculateStrength(pass: string): number {
  if (!pass) return 0;

  let score = 1;
  if (pass.length > 8) score += 1;
  if (pass.length > 12) score += 1;
  if (/[A-Z]/.test(pass)) score += 1;
  if (/[0-9]/.test(pass)) score += 1;
  if (/[^A-Za-z0-9]/.test(pass)) score += 1;

  return score;
}
