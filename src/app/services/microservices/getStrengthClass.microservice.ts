const LEVELS = ['weak', 'fair', 'good', 'strong', 'unstoppable'];

export function getBarClass(strength: number): string {
  return strength > 0 ? `strength__bar--${LEVELS[strength - 1]}` : '';
}

export function getTextClass(strength: number): string {
  return strength > 0 ? `strength__text--${LEVELS[strength - 1]}` : '';
}
