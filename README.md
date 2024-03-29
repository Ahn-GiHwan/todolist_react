# TODO LIST

**할 일을 적고 체크, 수정, 삭제할 수 있는 웹앱**

<h2 align="center"><b> Tech Stack </b></h2>
</br>
<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Babel-F9DC3E?style=flat-square&logo=Babel&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Git_flow-F05032?style=flat-square&logo=Git&logoColor=white"/></a> &nbsp
<img src="https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=Netlify&logoColor=white"/></a> &nbsp
<hr>

### React

- React Hook을 이용하여 개발.
- contextAPI와 useReducer를 사용하여 state 통합 관리.
- useRef를 통해 비제어 컴포넌트 구성.
- useEffect를 이용하여 focus() or 서버에서 데이터 가져오기 수행.
- useState를 이용하여 무한 클릭 방지.
- React.memo를 통해 props를 비교하여 불필요한 랜더링 최소화.
- Portals를 이용하여 modal 생성.
- axios로 서버와의 통신.

### Styled-components

- CSS in JS로 JS안에 CSS를 작성할 수 있는 라이브러리.
- props를 받아 지정 값을 설정할 수 있음.
- responsive web을 위해 todo가 넘치면 '...'으로 표시.

### Node.js

- node 환경에서 개발.
- npm을 통해 react, react-dom, axios, webpack에 필요한 모든 것, sweetalert, reset-css를 다운받아 개발.

### Webpack

- Webpack을 이용하여 번들 사용.
- 'HtmlWebpackPlugin'을 통해 기존 HTML 사용.
- 'MiniCssExtractPlugin'로 css파일을 생성하여 HTML에 연결.
- 'CleanWebpackPlugin'로 bulid 시 필요없는 파일 삭제.
- 'CopyPlugin'로 static폴더를 지정하여 이미지나 폰트 파일을 저장.
- babel, css loader로 파일 읽기.

### Babel

- ES6^의 문법을 ES5이하의 문법으로 변환하여 모든 브라우저에서 동작할 수 있게 함.
- React JSX문법을 컴퓨터가 읽을 수 있는 코드로 변환.

### Git-flow

- git-flow를 통한 브랜치 관리

### Netlify

- 배포를 도와주는 사이트.

<br>
<hr>

##

## Product

> 이미지 클릭 시 페이지 이동

[<img src="https://images.velog.io/images/ahngh/post/290914f0-c43c-47b3-85e6-443a87a39475/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.52.27.png" width="250">](https://skytodo-react.netlify.app/)

<br>
<hr>

## Express (server)

> https://github.com/Ahn-GiHwan/todolist_express

<br>
<hr>

## v3.0.1

- 수정 시 호출되는 모달창의 input placeholder값을 기존 todo값이 나오도록 수정.
- 미사용 hook 제거.

## v3.0.2

- React.memo를 이용하여 랜더링 최적화.
- Portals를 이용한 Modal창 생성.

## v3.1.0

- 서버와 통신(https://github.com/Ahn-GiHwan/todolist_express).
- Skeleton UI로 로딩 중 일때 화면 출력.
- 무한 클릭 방지.
- contextAPI, Modal의 위치를 변경하여 랜더링 최적화.

## v3.2.0

- responsive web (todo가 넘치면 '...'으로 표시).
- 10초마다 todos 업데이트 가능하게 함.
