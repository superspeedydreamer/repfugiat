var JSON_Obj = { "one":1, "two":2, "three":3, "four":4, "five":5 };

// Read key and value
for (var key in JSON_Obj) {
  console.log(key); // This will print the key
  console.log(JSON_Obj[key]); // This will print the corresponding value
}
