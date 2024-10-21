// alert("안녕하십니까")
// confirm("안은 생각보다 깨끗한데?")
// prompt("이름 딱대")
// prompt("이름 딱대", "주석철")
// document.write("<h1>안녕하십니까</h1>")


var currentYear = 2024;
var birthYear;
var age; 

console.log(currentYear);
console.log(birthYear);

birthYear = prompt("태어난 연도 입력 (YYYY)","");
age = currentYear - birthYear + 1;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다");