//test 1
console.log("Equality test with strings:", "Apple"==="Apple");
//test 2
console.log("Equality test with strings:", ("Apple" as string)!="orange");
//test 3
console.log("Lower Case function test:","HELLO" .toLowerCase() === "hello");
//test 4
console.log("Equality test with numbers:",26 === 26);
//test 8
console.log("Inequality test with numbers:",(26 as number) != 34);

//test 5
console.log("Greater than test", 10>5);
//test 9
console.log("less than test", 5<10);


//ttest 6
console.log("greaterthan and equal to test",10 >= 5);
//test 7
console.log("less than and equal to test",5 <= 10);
//test 10
console.log("and operator test:",5===5 && 10>5);
//test 11
console.log("and operator2 test:",5===5 || false);
//test in array12
const fruits :string[] =['banana','orange','pinapple'];
console.log('test" banana" in the array:' , fruits.includes("banana"));
//test in array 13
console.log('testing "Apple" is not in array:', !fruits.includes('Apple') );