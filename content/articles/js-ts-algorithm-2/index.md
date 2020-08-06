---
title: JS / TS로 풀어보기 - 시저 암호
date: '2020-08-06 00:08:17'
description: ''
tags: ['#CodingTest', '#Dev', '#TypeScript', '#JavaScript']
image: ./algorithm.png
---

> 평어체를 사용합니다.

![https://icons8.com/icon/80351/brainstorm-skill | https://icons8.com/icon/108784/javascript | https://icons8.com/icon/uJM6fQYqDaZK/typescript](algorithm.png)

# 코딩테스트 연습하기

요즘 학교에서 취업맞춤반 수업을 한다. 리액트를 배우는데 거의 아는 내용이라 남는 시간을 코딩테스트 연습에 투자하고 있다. 푼 것중에 기억이 남는 문제를 블로그에 해설하려 한다.

## 문제

### 문제 설명

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 조건

- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력 예

| s       | n   | result  |
| ------- | --- | ------- |
| "AB"    | 1   | "BC"    |
| "z"     | 1   | "a"     |
| "a B z" | 4   | "e F d" |

## 풀이

이 문제에서 내가 어렵거나 고민 했던 부분이 몇가지 있다.

1. 공백 처리
2. 문자를 뒤로 밀기
3. 대문자와 소문자 유지

우선 풀이에 성공한 코드는 다음과 같다.

```typescript
function solution(s: string, n: number) {
  const strArr = s.split('');

  return strArr
    .map((item) => {
      if (item === ' ') {
        return item;
      }

      const orgStrCode = item.charCodeAt(0);
      const strCode = orgStrCode + n;

      if (orgStrCode >= 65 && orgStrCode <= 90 && strCode > 90) {
        return String.fromCharCode(strCode - 26);
      }

      if (orgStrCode >= 97 && orgStrCode <= 122 && strCode > 122) {
        return String.fromCharCode(strCode - 26);
      }

      return String.fromCharCode(strCode);
    })
    .join('');
}
```

### 문자열 다루기 준비

문자열을 좀 수월하게 다루기 위해 `String.split()` 메소드를 통해 배열로 나눠줬다. 이렇게 하면 각 문자들을 조작하기 훨씬 쉬워진다.

```typescript
const strArr = s.split('');
```

### 공백 처리

위에서 만든 `strArr` 배열을 `Array.map()` 메소드를 통해 조작한다. 처음에는 현재 조작하는 문자가 공백인지 확인 후 공백이라면 다른 조작 없이 반환한다.

```typescript
return strArr
  .map((item) => {
    if (item === ' ') {
      return item;
    }
    ...
```

### 문자를 뒤로 밀기

처음 문제를 보자마자 아스키 코드가 생각났다. 아스키 코드를 사용한다면 문자를 뒤로 밀 수 있을 것 같았다.

`String.charCodeAt()`메소드를 통해 현재 조작하는 문자의 아스키 코드를 알아낸 후 이것에 `n` 만큼 더한다. 그리고 `String.fromCharCode()`메소드로 다시 문자로 바꾼다.

### 대문자와 소문자 유지

이게 가장 어려웠다. 입출력 예시를 보면 처음에 대문자로 입력된 문자는 대문자로, 소문자로 입력된 문자는 소문자로 유지된다. 위에서 말한 방법대로 할 때, 문자가 특수문자가 될 경우도 있었고, 대문자에서 소문자로 넘어가는 경우도 있었다.

이 부분을 해결하기 위해 고민을 좀 했다. 고민의 결과는 원래 입력 된 문자가 대문자인지 소문자인지 구분 하고, 그것에 `n`을 더하면 알파벳 범위를 넘어가는지 판단한다. 넘어간다고 판단되면, 알파벳의 갯수인 26을
빼서 오버플로우와 같은 효과를 낸다.

넘어가지 않는다면 그냥 `n`을 더해서 반환한다.

이렇게 조작을 완료 한 문자 배열은 문자열로 다시 만들어서 반환해야 한다. `Array.join()` 메소드를 통해 문자 배열을 문자열로 합친 후 반환한다.

```typescript
...
const orgStrCode = item.charCodeAt(0);
const strCode = orgStrCode + n;

if (orgStrCode >= 65 && orgStrCode <= 90 && strCode > 90) {
  return String.fromCharCode(strCode - 26);
}

if (orgStrCode >= 97 && orgStrCode <= 122 && strCode > 122) {
  return String.fromCharCode(strCode - 26);
}

return String.fromCharCode(strCode);
})
.join('');
```

## 배운 점

사실 대부분 원래 알고 있던 내용이었다. `String.charCodeAt()`과 `String.fromCharCode()`만 새로 알게 되었다. 시저 암호 역시 학교에서 살짝 배워서 알고 있었다. 그래도 다른 문제에 비해 많이 못푼 문제를 풀어서 나쁘지 않다.
