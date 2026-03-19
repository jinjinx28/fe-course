/*
 변수명 작성 규칙
- 라틴어(0~9, a~z, A~Z)
- xmrtnanswk($, _ 사용 가능, 이외의 특수문자는 사용 불가)
- Camel Case : 첫글자 소문자로 시작, 단어의 첫 시작은 대문자 ex) cameCase
- Pascal Case : 첫글자 대문자로 시작, 중간 단어의 첫 시작은 대문자 ex) PascalCase
- Snake Case : 소문자로 시작, 중간 단어 연결 시 _ 사용 ex)snake_case

💥주의사항💥
> 숫자로 시작하면 x
> 예약어(키워드)는 사용 불가, ex) function, var, let, const ..
> 이모지 사용 불가
*/

// camelCase
let myName = 'jinjin';
let myAge = 30;
console.log(myName);
console.log(myAge);

// snake_case
let my_name = 'nyong';
let my_age = 30;
console.log(my_name);
console.log(my_age);

// 저의 이름은 진진이고, 나이는 23입니다.
let output = '저의 이름은 '+ myName + '이고, 나이는 ' + myAge + '입니다.';
console.log(output);

// 템플릿 리터럴 (Template Literal) : `출력 문자 ${변수명}` (백틱 연산자)
let output2 = `저의 이름은 ${myName}이고 나이는 ${myAge}입니다.`;
console.log(output2);

// 상수 선언 : const, 변수명을 대문자로 선언
const AUDIO_DEVICE_START = 0;
const AUDIO_DEVICE_CONTINUE = 1;
const AUDIO_DEVICE_END = 2;

console.log(AUDIO_DEVICE_START);
console.log(AUDIO_DEVICE_CONTINUE);
console.log(AUDIO_DEVICE_END);