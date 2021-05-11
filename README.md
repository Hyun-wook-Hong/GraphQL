# GraphQL
- GraphQL

// npm 명령어처럼 아래 명령어로 graphql 프로젝트 생성 가능
npm add graphql-yoga

- GraphQL을 쓰면 기존 RESTful API를 사용할 때보다 아래 두가지 현상을 방지할 수 있다고 한다.
Over-fetching: 클라이언트가 요청한 영역의 정보보다 많은 정보를 서버에서 받는 현상. GraphQL은 DB의 사용자 영역 호출 만으로 필요한 정보를 가져올 수 있으므로 이 Over-fetching이 줄어듬  
Under-fetching: 어떤 하나를 완성할때 클라이언트가 다른 요청들을 해야할 때 발생.  
ex) 인스타그램 앱이 최초 '실행'되려면.. feed 데이터 요청, notification 데이터 요청, user feed 데이터 요청 이 세가지 GET을 REST로 보내야함

- nodemon, babel-cli 설치: Node.js 수정 시 서버 실행 자동화 Tool (정의가 정확하진 않음, 그런 기능을 하는듯)
npm install nodemon --save-dev
npm add babel-cli
npm add babel-cli babel-preset-env babel-preset-stage-3 --dev
