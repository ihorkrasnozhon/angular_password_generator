import {PasswordOptions} from '../../interfaces/password.interface';

export function generatePasswordLocal(options: PasswordOptions): string {
  const charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
  };

  let allowedChars = '';
  let mandatoryChars: string[] = [];

  if (options.includeLowercase) {
    allowedChars += charSets.lowercase;
    mandatoryChars.push(charSets.lowercase[Math.floor(Math.random() * charSets.lowercase.length)]);
  }
  if (options.includeUppercase) {
    allowedChars += charSets.uppercase;
    mandatoryChars.push(charSets.uppercase[Math.floor(Math.random() * charSets.uppercase.length)]);
  }
  if (options.includeNumbers) {
    allowedChars += charSets.numbers;
    mandatoryChars.push(charSets.numbers[Math.floor(Math.random() * charSets.numbers.length)]);
  }
  if (options.includeSymbols) {
    allowedChars += charSets.symbols;
    mandatoryChars.push(charSets.symbols[Math.floor(Math.random() * charSets.symbols.length)]);
  }

  if (allowedChars === '') allowedChars = charSets.lowercase;

  let generatedPassword = [...mandatoryChars];

  for (let i = generatedPassword.length; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    generatedPassword.push(allowedChars[randomIndex]);
  }

  return generatedPassword.sort(() => Math.random() - 0.5).join('');
}
