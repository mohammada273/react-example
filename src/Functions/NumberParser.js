export function NumberToPersian(string){
  const numbers = ["۰", "١", "٢", "٣", "۴", "۵", "۶", "٧", "٨", "٩"];
  let chars = string?.split("");
  for (let i = 0; i < chars?.length; i++) {
    if (/\d/.test(chars[i])) {
      chars[i] = numbers[chars[i]];
    }
  }
  return chars?.join("");
};