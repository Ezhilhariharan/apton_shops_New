export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`
    : Math.sign(num) * Math.abs(num);
};

export function divideArray(array, parts) {
  const result = [];
  if (Array.isArray(array)) {
    const size = Math.ceil(array?.length / parts);

    for (let i = 0; i < parts; i++) {
      const start = i * size;
      const end = start + size;
      result.push(array?.slice(start, end));
    }
  }
  return result;
}
