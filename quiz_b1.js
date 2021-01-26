function minRemoval(str1, str2) {
	let array1 =str1
	.split('')

	let array2 =str2
	.split('')




  	let firstValue = array1.filter(val => !array2.includes(val));

	let secondeValue = array2.filter(val => !array1.includes(val));


	return firstValue.length + secondeValue.length
}

// =====================================
// ไฟล์ส่วนล่างนี้เป็นตัวอย่าง input output (test case)
// ห้ามแก้ไข!
// วิธีการรันคือ 
//   1. เปิด terminal
//   2. cd เข้ามาที่โปรเจ็คปัจจุบัน
//   3. รัน node เว้นวรรค ตามด้วยชื่อไฟล์
//   4. หาก โปรแกรมทำงานถูกต้องจะขึ้น true ทั้งหมด
// =====================================
function test(obj) {
	console.log(obj.index + ": ", minRemoval(obj.input1, obj.input2) === obj.output);
}
test({
	index: 1,
	input1: "abcde",
	input2: "cab",
	output: 2
});
test({
	index: 2,
	input1: "deafk",
	input2: "kfeap",
	output: 2
});
test({
	index: 3,
	input1: "abc",
	input2: "ghi",
	output: 6
});
test({
	index: 4,
	input1: "abcxyz", 
	input2: "ghixytz",
	output: 7
});
