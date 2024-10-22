// 1.사용자로부터 국어 점수 / 과학 점수 / 수학 점수 / 영어 점수 입력받아 저장하세요. 
// 모든 점수를 합해서 평균을 내세요. 
// 만약 평균이 60이 넘는다면 "합격" 출력하고 넘지 않으면 "낙제" 출력

var kor = parseInt(prompt("당신의 국어 점수를 입력하세요"));
var math = parseInt(prompt("당신의 수학 점수를 입력하세요"));
var scy = parseInt(prompt("당신의 과학 점수를 입력하세요"));
var en = parseInt(prompt("당신의 영어 점수를 입력하세요"));

var all = kor + math + scy + en;
var phung = all / 4

if(phung >= 60) {
    alert("합격")
} else {
    alert("낙제")
}
