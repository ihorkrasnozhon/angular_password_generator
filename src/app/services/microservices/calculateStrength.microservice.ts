export function calculateStrength(pass: string): number {
  if (!pass) return 0;

  let score = 1;


  if (pass.length < 8) return score;
  if (pass.length > 8) score += 0.5;
  if (pass.length > 12) score += 0.5;
  if (pass.length > 18) score += 0.5;
  if (/[A-Z]/.test(pass)) score += 0.5;
  if (/[0-9]/.test(pass)) score += 1;
  if (/[^A-Za-z0-9]/.test(pass)) score += 1;

  return Math.floor(score);
}
