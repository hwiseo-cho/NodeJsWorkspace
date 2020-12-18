var a = 1;
var b = 2;
console.log(a);
console.log(b);
console.log(a+b);

var name = '홍길동'; 
var str = '안녕하세요 '+ name +'님\n환영합니다!';
// '' 말고 --> ``로 바꾸면 이런식으로 변수를 ${}의 형태로 출력 가능
var str2 = `안녕하세요 ${name}님 
환영합니다!${1+1}`;
console.log(str+'\n');
console.log(str2);