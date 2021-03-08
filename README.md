## React UI Libraries

<br>
<br>

```
본 게시글에서 소개되는 UI 라이브러리들은 프로젝트를 통해 오랫동안 직접 사용해본 것이 아닌
학습용으로 여러 가지 자료를 찾아 작성되었음을 알려드립니다 (개인적인 의견도 살짝 포함되어 있습니다)
```

<br>
<br>

### 👩🏻‍💻 Material UI

> [material UI 공식사이트](https://material-ui.com/)
> 구글 머테리얼 디자인을 기반으로 제작된 UI 라이브러리

📌 **설치 방법**

```
npm install @material-ui/core
또는 yarn install @material-ui/core

// 아이콘 사용시 설치
npm install @material-ui/icons
또는 yarn install @material-ui/icons
```

<br>

📌 **사용 방법**

```javascript
import React from 'react';
import { Button } from '@material-ui/core';

function MaterialUI() {
  return (
    <div>
      <Button href="#">Button</Button>
    </div>
  );
}

export default MaterialUI;
```

<br>

📌 **장점**

- 리액트 기반 UI 라이브러리 중 가장 인기 있고 성숙한 라이브러리
- 지원하는 기능과 디자인이 다양함
- stable 버전에서는 inline style을 사용하고 있어, 컴포넌트 커스터마이징 하는게 생각보다 쉽지 않음

<br>

📌 **단점**

- styled-component 사용시 주의

```javascript
const Hover = styled('div')({
  backgroundColor: 'red',
});
```

- 비교적 복잡하여 사용하기 위한 학습이 필요

<br>
<br>
<br>

### 👩🏻‍💻 Ant Design

> [Ant Design 공식사이트](https://ant.design/)
> 리액트와 타입스크립트(Typescript) 기반으로 제작된 UI 라이브러리
> 알리바바 그룹의 자회사로 핀테크 기술을 개발하는 Ant Financial에서 제공

📌 **설치 방법**

```
npm install antd --save
또는 yarn add antd --save
```

<br>

📌 **사용 방법**

```javascript
// index.js
import 'antd/dist/antd.css';
```

```javascript
// antd를 사용할 컴포넌트
import React, { useState } from 'react';
import { Button } from 'antd';

function Antd() {
  return (
    <div>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default Antd;
```

<br>

📌 **장점**

- material UI보다 비교적 사용하기 편함

<br>

📌 **단점**

- 사이트나 공식 문서 등은 영어도 지원하지만 github issue에서는 중국어가 자주 등장

<br>
<br>

### 👩🏻‍💻 Chakra UI

> [Chakra UI 공식사이트](https://chakra-ui.com/)
> Segun Adebayo가 만든 React용 최신 구성 요소 UI 라이브러리

📌 **설치 방법**

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
또는 yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

<br>

📌 **사용 방법**

```javascript
// index.js
import { ChakraProvider } from '@chakra-ui/react';
```

```javascript
// your component
import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';

function ChakraUI() {
  return (
    <div>
      <ChakraProvider>
        <Button colorScheme="blue">Button</Button>
      </ChakraProvider>
    </div>
  );
}

export default ChakraUI;
```

<br>

📌 **장점**

- WAI-ARIA 를 엄격히 준수하여 접근성이 훌륭하면서도 개발이 빠름

```
  WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications)
  : 웹 페이지, 특히 동적 콘텐츠, 그리고 Ajax, HTML, 자바스크립트 및 관련 기술로 개발된
  사용자 인터페이스 구성 요소의 접근성을 증가시키는 방법에 대해 규정한 W3C가 출판한 기술 사양
```

- 전체 어플리케이션/컴포넌트에 테마 및 다크모드 적용이 쉬움
- 모든 컴포넌트들이 결합해서 사용하는 것을 염두에 두고 개발됨
- 자체적으로 만든 hooks가 다양

<br>

📌 **단점**

- Chakra 사용 시 h1, button 등 기본 html 태그의 속성이 사라짐
- 아이콘을 제공하나 아이콘 종류가 많진 않음

<br>
<br>

### 👩🏻‍💻 React-Bootstrap

> [React-Bootstrap 공식사이트](https://react-bootstrap.github.io/)
> Bootstrap을 리액트 기반으로 변경한 UI 라이브러리

📌 **설치 방법**

```
npm install react-bootstrap bootstrap
```

<br>

📌 **사용 방법**

```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function ReactBootstrap() {
  return (
    <div>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default ReactBootstrap;
```

<br>

📌 **장점**

- React의 상태를 사용하여 업데이트하므로 상태를 관리하기가 더 쉬움 (Bootstrap은 DOM의 상태를 직접 조작)
- Bootstrap 테마를 손쉽게 선택할 수 있음

<br>

📌 **단점**

- Bootstrap 3.x 버전을 기반으로 제작되어 style이 최신화되어 있지 않음

<br>
<br>

### 👩🏻‍💻 Reactstrap

> [Reactstrap 공식사이트](https://reactstrap.github.io/)
> Bootstrap 4.x alpha 버전을 적용한 UI 라이브러리

📌 **설치 방법**

```
npm install bootstrap
npm install reactstrap react react-dom
```

<br>

📌 **사용 방법**

```javascript
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Reactstrap() {
  return (
    <div>
      <Button color="info">Button</Button>
    </div>
  );
}

export default Reactstrap;
```

<br>

📌 **장점**

- bootstrap4 의 최신 style을 적용할 수 있음

<br>

📌 **단점**

- Bootstrap CSS가 포함되어 있지 않아 필수로 설치해야 함

<br>
<br>
<br>
<br>
<br>

[참고 자료 1](https://usecode.pw/10-best-react-ui-library/)
[참고 자료 2](https://darrengwon.tistory.com/)
[참고 자료 3](https://medium.com/@lyh6425/%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-ui-kit%EB%93%A4%EC%9D%98-%EC%9E%A5%EB%8B%A8%EC%A0%90-3a7e44a18359)
[참고 자료 4](https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html)
