import { argv } from 'node:process';
import * as fs from 'fs';

let dir = argv[2]
console.log("Dir: ", dir)

fs.readdirSync(dir).forEach((val) => {
  let arr = val.split("@")
  let oldname = dir + '/' + val
  let newname = dir + '/' + arr[0] + "_" + arr[1]
  if (arr.length == 2) {
    fs.renameSync(oldname, newname)
  } else {
    console.log("skip: ", val)
  }
});
