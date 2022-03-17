export const searchResult = (result, sn, fn, ln) => {
  let title = sn.sname === undefined ? sn.name : sn.sname;
  let first = fn.name === undefined ? title : fn.name;
  let last = ln.name;
  // console.log(title,first,last);
  return result.filter((d) => {
    if (
      d.name.title === title ||
      d.name.first === first ||
      d.name.last === last
    ) {
      return d;
    }
    return null;
  });
};

export function capitalizeFirstLetter(data) {
  if (data.length === 0 || data === undefined) {
    return " ";
  }

  function Capitalize(str) {
    let arrname = str.split(" ");
    let newarr = [];
    for (let i = 0; i < arrname.length; i++) {
      newarr.push(arrname[i].charAt(0).toUpperCase() + arrname[i].slice(1));
    }
    return newarr;
  }
  let arrName = Capitalize(data);
  let newArr = [];
  for (let i = 0; i < arrName.length; i++) {
    if (
      arrName[i] === "Mr" ||
      arrName[i] === "Mrs" ||
      arrName[i] === "Miss" ||
      arrName[i] === "Ms" ||
      arrName[i] === "Prof"
    ) {
      newArr.push({ ...newArr[i], sname: arrName[i] });
    } else if (arrName[i]) {
      newArr.push({ ...newArr[i], name: arrName[i] });
    }
  }
  return newArr;
}
