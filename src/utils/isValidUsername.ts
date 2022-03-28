export function isValidUsername(username?: string) {
  if (!username || (username && username.length < 3)) {
    return false;
  }
  return true;
}
