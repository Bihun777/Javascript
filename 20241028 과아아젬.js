// 사용자로부터 아무 숫자나 입력 받기 
// 단, 취소 버튼을 누르면 아무 것도 보여주지 않기 
// 입력을 받아 반복문을 사용해서 1부터 시작해서 입력 받은 숫자 사이의 있는 3의 배수를 찾기 
// 찾은 모든 3의 배수와 숫자의 개수까지 표시해주세요. 

var anyNumber = Number(prompt("아무 숫자나 입력하세요"));

if(anyNumber === null) {
    alert("접근이 거부 되었습니다")
}

var i;
var sum = 1
var count = 0;

for(i = 1; i < anyNumber; i++) {
    sum += 1
    if(sum % 3 == 0) {
        document.write(sum + ", ")
        count++
    }
}
document.write(count + "개입니다")