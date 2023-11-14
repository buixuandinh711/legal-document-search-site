export const convertSecsToDate = (secsFromEpoch: number): string => {
  const msFromEpoch = secsFromEpoch * 1000;
  const date = new Date(msFromEpoch);

  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

/// Utility function to convert query parameter to string[]
export const convertQueryParam = (param: undefined | string | string[]): string[] => {
  if (param === undefined) {
    return []; // Return an empty array for undefined
  } else if (typeof param === "string") {
    return [param]; // Convert a single string to an array with one element
  } else {
    return param; // Already an array, so return as is
  }
};
