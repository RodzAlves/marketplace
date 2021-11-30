export const ellipsis = (value: string, limit: number): string => {
  return value.length > limit ? `${value.slice(0, limit)}...` : value;
};
