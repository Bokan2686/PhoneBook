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
