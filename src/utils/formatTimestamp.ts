export const formatTimestamp = (date: string) => {
  if (!date) {
    return "";
  }
  return new Date(date).toDateString();
};
