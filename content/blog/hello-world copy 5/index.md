---
title: 내가 생각하는 현재 한빛 FE 상태관리의 문제점
date: '2020-03-26'
description: '리덕스 사가는 과연 필수였을까?'
tags: ['#React', '#Hanlight', '#Redux']
image: ./salty_egg.jpg
---

```ts
import styled from 'styled-components';
import { pxToRem } from 'utils';
import { Default } from 'lib/style';

export const Wrapper = styled.li`
  height: ${pxToRem(24)};

  margin: 0;
  margin-right: ${pxToRem(16)};

  :last-of-type {
    margin-right: 0;
  }

  display: inline-flex;
  align-items: center;

  padding: ${pxToRem(4)} ${pxToRem(10)};
  font-family: 'SpoqaHanSans';
  font-size: ${pxToRem(12)};
  font-weight: bold;

  border-radius: ${pxToRem(8)};

  background-color: ${Default.tagItem};
`;
```

`example.tsx`

```ts
export interface IPost {
  id: string;
  title: string;
  author: IUser;
  body: string;
  comments: IComment[];
}

export type IPostEntity = IEntityTypeOf<IPost>;

export const post = new schema.Entity<IPost>('posts', {
  author: user,
  comments: [comment],
});
```

# 1. Redux-Saga의 필요성

분명히 Redux-Saga는 지금 우리가 사용할 수 있는 (무언가를 크게 배우지 않고, 적당한 러닝커브로) 미들웨어 중 가장 인기가 높고, 많은 것을 할 수 있는 라이브러리다.

하지만 Redux-Saga를 사용하는 것이 오버엔지니어링은 아닐까?

간단히 axios로 데이터를 받아와 저장하는 로직을 사용해도 된다. 물론 리덕스 액션을 디스패치 하는 것은 기본적으로 `asynchronous`하지 않기 때문에 문제는 있을 수 있으나 큰 문제는 없다.

아니면 Redux-Thunk를 써도 된다. 이건 Saga보다 쉽다. 음.

Saga의 가장 큰 문제점은 그 거대한 보일러플레이트이다. 현재 한빛 리덕스 구조는 ducks 패턴을 사용하지 않기 때문에 상당히 많은 파일들과 디렉토리들을 가지고 있다.

- action
  - user / meal / notice .action.ts
  - `~~~ .type.ts`
  - index.ts
- model
  - user / meal / notice .model.ts
  - index.ts
- reducer
  - `~~~.reducer.ts`
  - index.ts
- configure-store

이게 기본적인 한빛의 리덕스 구조인데, 일단 복잡하다고 생각한다. `redux-toolkit`이 나온 이상 훨씬 간단해질 수 있다. 차치하고, 여기에 Saga를 끼얹으면?

- saga

  - request

    - ```.request.ts

      ```

  - saga

    - ```.saga.ts

      ```

가 추가 된다.

이미 복잡한데 여기에 이걸 더? 현기증이 날 것 같다.

그렇다. 한빛에는 **Redux-saga가 필요 없다.**

## 그렇다면 현재의 상태 관리 구조는?

생각해보자. 유저의 정보 외에 굳이 글로벌 스토어에 저장되어 있어야 할 데이터가 있을까? 없다. 아무리 생각해봐도 처음 로그인 할 때 요청되어 들어오는 유저의 데이터 (이름, 학년, 반, **액세스 토큰**)을 제외 하고는 모든 컴포넌트에서 알아야 할 것이 없다.

메인 페이지의 컴포넌트들은 각각 필요한 데이터를 리덕스에서 가져온다. 리덕스 액션을 `dispatch`하여 `saga`에서 API 요청을 보내고, 이것을 다시 리덕스 스토어에 담고, 이것을 컴포넌트에서 불러온다.

단순히 생각해보면, 비효율적이다. 오버엔지니어링이 맞는 것 같다.

각 컴포넌트에서 필요한 데이터는 각 컴포넌트에만 저장되어 있으면 된다.

이걸 이제야 깨닫다니..

### 그렇다면 현재의 상태 관리 구조는?

생각해보자. 유저의 정보 외에 굳이 글로벌 스토어에 저장되어 있어야 할 데이터가 있을까? 없다. 아무리 생각해봐도 처음 로그인 할 때 요청되어 들어오는 유저의 데이터 (이름, 학년, 반, **액세스 토큰**)을 제외 하고는 모든 컴포넌트에서 알아야 할 것이 없다.

메인 페이지의 컴포넌트들은 각각 필요한 데이터를 리덕스에서 가져온다. 리덕스 액션을 `dispatch`하여 `saga`에서 API 요청을 보내고, 이것을 다시 리덕스 스토어에 담고, 이것을 컴포넌트에서 불러온다.

단순히 생각해보면, 비효율적이다. 오버엔지니어링이 맞는 것 같다.

각 컴포넌트에서 필요한 데이터는 각 컴포넌트에만 저장되어 있으면 된다.

이걸 이제야 깨닫다니..

# 그렇다면 현재의 상태 관리 구조는?

생각해보자. 유저의 정보 외에 굳이 글로벌 스토어에 저장되어 있어야 할 데이터가 있을까? 없다. 아무리 생각해봐도 처음 로그인 할 때 요청되어 들어오는 유저의 데이터 (이름, 학년, 반, **액세스 토큰**)을 제외 하고는 모든 컴포넌트에서 알아야 할 것이 없다.

메인 페이지의 컴포넌트들은 각각 필요한 데이터를 리덕스에서 가져온다. 리덕스 액션을 `dispatch`하여 `saga`에서 API 요청을 보내고, 이것을 다시 리덕스 스토어에 담고, 이것을 컴포넌트에서 불러온다.

단순히 생각해보면, 비효율적이다. 오버엔지니어링이 맞는 것 같다.

각 컴포넌트에서 필요한 데이터는 각 컴포넌트에만 저장되어 있으면 된다.

이걸 이제야 깨닫다니..

# 그래, 그래서 해결책은?

사실 이 글을 쓰게 된 이유가 여기 있다. 난 새로운 라이브러리, 기술을 배우고 사용하는 걸 좋아한다. 그리고 [react-query](https://github.com/tannerlinsley/react-query/)라는 꽤 멋진 라이브러리를 알게 되었다. 왜 멋지냐? `useQuery`하나만으로 상당량의 코드를 줄여주고, 다양한 기능을 제공한다.

아직 써보지는 않았지만 `react-query`를 사용한다면 대충 다음과 같은 코드로 현재의 비효율적인 상태 관리 / 데이터 요청을 처리할 수 있을 것이다.

```ts
const FetchSomething = (): Promise<any> => {
	return axios.get();
}
const FetchSomething = (): Promise<any> => axios.get();

export default function App() {
 const { status, data, error } = useQuery('queryKeys', FetchSomething);

  if (status === 'Loading') {
    return <div>로딩중</div>
  }

  return (...)
}
```

여기서 요청을 하는 함수만 따로 작성하고, 이것을 import하여 사용하면 될 것 같다.

# 달라지는 점은?

우선 `user`를 제외한 엄청난 양의(80% 쯤 되지 않을까..?) Redux, Redux-Saga에 관련 있는 코드가 줄어들 것이다. 그리고, container 혹은 Custom Hooks를 만들어 각 컴포넌트에서 데이터를 요청해 사용할 수 있어서 내 생각엔 유지보수도 훨씬 편해질 것 같다.

그리고 아직 안써봐서 모르지만 `user`쪽 역시 값을 저장하는 액션과 리듀서만 있으면 될 것 같다. 그리고 그것을 불러오는 Custom Hook이면 그냥 끝.

어디까지나 개인적인 의견이지만 같이 개발한 예준이 형 역시 구조에 환멸을 느끼는 것 같다. 그리고 이 해결책(?)이 더 큰 효과를 발하기 위해선 page - components 구조가 더욱 확실해 져야 할 것이다. 한마디로 아토믹 디자인의 개념을 더 적극적으로 사용해야 할 것이다.
