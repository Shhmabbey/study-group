// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// compress('ccaaatsss'); // -> '2c3at3s'
// compress('ssssbbz'); // -> '4s2bz'
// compress('ppoppppp'); // -> '2po5p'
// compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
// compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'); 
// // -> '127y'

// driver: ayce
// nav: abbey

const compress = (s) => {
//   // todo
// //   set a count == 1 
// //   iterate through string
// //   if s[i] == s[i+1], increment count 
// //   else 
// //   reset count to 1 and for loop
//   let counter = 1; 
//   let res = []
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) {
//       counter++
//     } else {
//       if (counter == 1) {
//         res.push(s[i]) 
//         counter = 1
//       } else {
//         let num = counter.toString();
//         res.push(num)
//         res.push(s[i]);
//         counter = 1
//       } 
//     }
//   }
//   return res.join("")
// //   
  
  
//   approach: use an object to keep track of number of occurences
// obj doesnt work for test 2, thanks jwong
//   indexing at pointers
//   some sort of gotcha at end of string
  
  
  
  let i = 0;
  let compressed = "";
  let count = 1;
  
  while (i < s.length) { // ssssbb i = z, i + 1 = undefined
    if (s[i] === s[i + 1]) { // s === s; s !== b; b === b; b !== z
      count += 1 // 2, 3, 4; 2
    } else {
      if (count === 1) {
        compressed += s[i]; // 4s2bz
      } else {
        compressed += count + s[i]; // 4s2b
        count = 1;
      }
      
    }
    i += 1;
  }
  
  return compressed;
};

// tid bits = i++, ++i, i+=1

// time c - linear, 0(n)

// space c = linear, 0(n), space relevant to input, measure of variables we're using relative to input size 