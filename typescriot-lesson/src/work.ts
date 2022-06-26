const saveDate = {
  name: "panda",
  code: "3",
};

const mOwner = [
  {
    name: "hoge",
    code: "1",
  },
  {
    name: "huga",
    code: "2",
  },
  {
    name: "huhu",
    code: "3",
  },
  {
    name: "huho",
    code: "7",
  },
  {
    name: "huhh",
    code: "10",
  },
];

const codes = mOwner.map((mo) => mo.code);

// console.log(codes);

// codes.forEach((c) => {
//   let testNumber = Number(c) + 1;
//   console.log("codeの値に1追加", testNumber);
//   let [result] = codes.filter((c) => Number(c) == testNumber);
//   console.log("codesの中に追加した値があるか検索", result);

//   if (!result) {
//     saveDate.code = String(testNumber);
//     console.log("重複がない場合値を保存", saveDate);
//   } else {
//     console.log("重複がない場合保存しない");
//   }
// });

let n = 0;
while (n < mOwner.length) {
  const code = codes[n];
  const testNumber = Number(code) + 1;
  console.log("codeの値に1追加", testNumber);
  const [result] = codes.filter((code) => Number(code) == testNumber);
  console.log("codesの中に追加した値があるか検索", result);

  if (result) {
    console.log("重複がある場合保存しない");
  } else {
    saveDate.code = String(testNumber);
    console.log("重複がない場合値を保存", saveDate);
    break;
  }

  n += 1;
}

// let n = 0;
// while (n < codes.length) {
//   let code = codes[n];
//   if (code == "2") {
//     console.log("終わり");

//     break;
//   }
//   console.log(code);
//   n += 1;
// }
