import type { User } from "./mockData";

export const chunkArray = (arr: Array<User>, chunkSize: number) => {
  const results = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    results.push(arr.slice(i, i + chunkSize));
  }
  return results;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  return phoneRegex.test(phone);
};

export const getLastNameFormat = (user: User): string => {
  let title = null;
  let first = null;
  let last = null;
  const nameArray = user.name.split(" ");
  if (
    nameArray[0] === "Mr." ||
    nameArray[0] === "Ms." ||
    nameArray[0] === "Mrs."
  ) {
    title = nameArray[0];
    nameArray.splice(0, 1);
  }

  first = nameArray[0];
  nameArray.splice(0, 1);

  last = nameArray.join(" ");
  return `${last}, ${first} ${title ? `(${title})` : ""}`;
};
