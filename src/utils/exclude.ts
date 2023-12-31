
// Exclude keys from user
export function exclude(user:any, keys:Array<any>) {
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !keys.includes(key))
  );
}