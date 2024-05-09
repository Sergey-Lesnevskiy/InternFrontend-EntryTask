import { encoded, translations } from "./data.js";

console.log("Let's rock");

function encoding(encoded) {
  const arr = [...encoded];
  const uniq = []
  arr.map((obj, count) => {
    const key = Object.entries(obj);
    key.forEach((item) => {
      if (
        item[0] === "groupId" ||
        item[0] === "service" ||
        item[0] === "formatSize" ||
        item[0] === "ca"||
        item[1] === null
      ) {
        return;
      } else if (item[0].endsWith("Id")) {
        if (translations[item[1]] || item[1] === '0') {
          arr[count][item[0]] = translations[item[1]];
        }
      }   
    });
    key.forEach((item) => {
      if(item[0].endsWith("Id")&&!translations[item[1]] && item[1] !== '0' && item[1] !== null){
        uniq.push(item)
      }
    })
  });

  return [...arr,...uniq];
}
console.log(encoding(encoded));
