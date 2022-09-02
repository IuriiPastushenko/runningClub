
// обработка входящего запроса
export function getArgs(args) {
  const res = {};
  const [a, b, ... dates] = args;
  res[dates[0]] = new Date().toLocaleDateString();
  res[dates[1]] = new Date().toLocaleTimeString();
  res[dates[2]] = true;
  return res;
}