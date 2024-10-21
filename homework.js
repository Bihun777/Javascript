// 1. 사용자로부터 이름 / 생년월일 / 전화번호 / 이메일을 입력받으세요 
// 2. 입력받은 데이터를 배열로 저장하세요 
// 3. 배열로 저장한 데이터를 화면에 
// "(이름)"님 환영합니다! // (현재 나이)세" 이렇게 출력하세요 

var currentYear = 2024;
var birthYear;
var birthDay;
var age; 
var email;
var name;

name = prompt("이름을 입력하세요", "");
birthYear = prompt("태어난 연도 입력 (YYYY)","");
birthDay = prompt("생일입력 (MMDD)","");
email = prompt("이메일을 입력하세요", "");

var userData = [name, birthYear, birthDay, email]
console.log(userData)

age = currentYear - birthYear + 1;
document.write(name + "님 환영합니다!<br>");
document.write(age + "세");