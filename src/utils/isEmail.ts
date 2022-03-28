export function isEmail(email?: string) {
  if (!email) {
    return false;
  }
  const emailRegExp = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@([-\w.]*[-\w])\.[A-Za-z0-9-]{2,}$/g;
  return emailRegExp.test(email);
}
