export function generatePassword(
  length: number = 12,
  options: { 
    uppercase?: boolean; 
    lowercase?: boolean; 
    numbers?: boolean; 
    symbols?: boolean; 
  } = { uppercase: true, lowercase: true, numbers: true, symbols: true }
): string {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const syms = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (options.uppercase) chars += upper;
  if (options.lowercase) chars += lower;
  if (options.numbers) chars += nums;
  if (options.symbols) chars += syms;

  if (!chars) throw new Error("No character types selected");

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}