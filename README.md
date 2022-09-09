# My_Diary

<div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189145978-a153927f-8985-42de-ac4a-883fb2a7331a.png" width="350px" height="60px" title="mydiaryLogo" alt="mydiaryLogo"></img> <br/>
  
   [Go to the App](http://my-diary-myunghun.herokuapp.com)
  
</div>

# 소개

집에 하나씩은 가지고 있는 다이어리의 기능을 담은 웹앱을 만들어보았습니다. <br/>
Calendar에서 자유롭게 일정을 생성 및 수정하고, label 기능으로 빠르게 일정을 만들고 구분지을 수 있습니다. <br/>
Memo 장에서 필요한 내용을 필기하고 중요한 내용은 중요표시로 표시하고 따로 모아볼 수 있습니다.<br/>
클라이언트 단에서는 redux-toolkit을 사용 상태를 관리하고 서버와 통신할 수 있도록 하였고
서버단에서는 nodejs와 express를 사용 유저 로그인과 caledndar, label, memo와 관련된 CRUD 기능을 만들어 MongoDB와 연결하여 데이터를 관리했습니다.

# 기술스택

<div align="center">

 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
 <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
 <img src="https://img.shields.io/badge/Bootstrap_icon-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"><br/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
 <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
 <img src="https://img.shields.io/badge/Redux_Toolkit-999999?style=for-the-badge&logo=Redux-Saga&logoColor=white"><br/> 
 <img src="https://img.shields.io/badge/Node_js-339933?style=for-the-badge&logo=Nodejs&logoColor=white">
 <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
 <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
 
</div>

---

### <img src="https://user-images.githubusercontent.com/79836148/189150002-5e4c5352-f9b4-4de4-a2ec-9704414070f8.png" width="50px" height="50px" title="Fullcalendar" alt="Fullcalendar"></img> Fullcalendar

달력과 스케줄러와 관련된 다양한 기능을 제공하는 자바스크립트 기반 캘린더 라이브러리이다.
본 프로젝트에서는 fullcalendar에서 달력의 월간 주간 event 표시, Drag & Drop, event 클릭 및 길이조절 등의 기능을 사용하였다.

<br/>

### <img src="https://user-images.githubusercontent.com/79836148/189152096-21b5e2cb-c22d-4844-88f7-ced32380cc5d.png" width="50px" height="50px" title="Draftjs" alt="Draftjs"></img> Draftjs

페이스북에서 관리하는 react에서 사용하는 오픈소스 기반 에디터 프레임워크이다.
프로젝트 내에 memo 기능에서 memo를 생성 및 편집하는 편집기로 사용하였다. react에서 좀 더 쓰기 쉽게 만든 react-draft-wysiwyg을 사용하여 구현하였다.

<br/>

# 웹 기능

## Home

- Home 페이지에서 로그인을 하면 유저의 이 달의 일정 정보와 최근 메모를 한번에 볼 수 있도록 구현하였다.
- Navigation 탭에서 calendar 와 memo page로 넘어 갈 수 있고, 로고를 클릭해 랜딩페이지로 갈 수도 있다.
- 오른쪽 상단에 위치한 토글버튼으로 다크모드를 이용할 수 있다.

   <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189155131-2bc82c3a-e4f3-4611-835a-bbc58b6674c1.jpg" width="250px" height="150px" title="home" alt="home"></img> 
   <img src="https://user-images.githubusercontent.com/79836148/189155408-11c7f105-7c75-414e-bc6a-d7ef22ab707d.jpg" width="250px" height="150px" title="loginHome" alt="loginHome"></img> 
  <img src="https://user-images.githubusercontent.com/79836148/189155468-ebb486d3-4f3a-4888-a19d-271918a26f95.jpg" width="250px" height="150px" title="darkhome" alt="darkhome"></img> 
  <br/>
 
</div>

## Login

- 기본 로그인은 Home Page내에서 가능하다.
- google, kakao, naver의 소셜 로그인을 지원한다.
- 회원가입 글자를 클릭해 회원가입 page로 넘어갈 수 있다.

   <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189155891-948e0149-93cb-4a5a-8fa7-8aa6803eca5c.jpg" width="250px" height="150px" title="login" alt="login"></img> <img src="https://user-images.githubusercontent.com/79836148/189156053-43e8e02a-9bb2-4b6e-a35e-79156c3f3ce8.jpg" width="250px" height="150px" title="signUp" alt="signUp"></img> 
  <br/>

</div>
   
  
   ## Calendar
  
       Calendar는 월별 보기와 주별 보기가 지원되고, 화살표로 월과 주단위 이동이 가능하다.
       생성 버튼으로 event를 생성하고, 휴일버튼으로 휴무일을 지정할 수 있다.
       생성된 event는 main view에서 drag & drop으로 수정가능하고, 클릭해서 상세하게 수정도 가능하다.
       Label 창에 자신만의 일정을 분류하는 라벨을 만들어 쉽고 빠르게 event를 생성할 수 있다.
       Side calendar는 event 표시기능만 지원한다.
   
   
   <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189157492-b71aa852-ed52-4c3c-bffd-bd98293a8234.jpg" width="300px" height="200px" title="calendarPage" alt="calendarPage"></img> <img src="https://user-images.githubusercontent.com/79836148/189157587-a92d1929-cbcc-4235-bf3f-09410c5585e7.jpg" width="300px" height="200px" title="calendarWeek" alt="calendarWeek"></img> <img src="https://user-images.githubusercontent.com/79836148/189159417-203d7204-7de4-4098-a063-751506e7ecfc.jpg" width="300px" height="200px" title="caledarDnD" alt="caledarDnD"></img> 
  <br/>


</div>
   
   * Event Create & Edit
    
      - Event는 일일 event와 정기 event 두가지 종류로 만들 수 있다. 
      - 각 종류별 종일 일정 설정을 할 수 있어서 종일 일정일 경우 굵은 막대로 달력에 표시된다.
      - 편집모드는 event 클릭시 나오며 삭제도 여기서 가능하다.
      - 일일과 정기는 서로간 이동이 불가하고 종일설정도 변경이 불가하다. 라벨을 지정한 경우는 color도 변경이 불가능 하다.
   
   
   <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189158713-62da974e-dc6f-49fa-b7e2-715ff9e78b61.jpg" width="300px" height="200px"  title="calendarDaliy" alt="calendarDaliy"></img> <img src="https://user-images.githubusercontent.com/79836148/189158798-a924775f-93fa-409b-baa6-20a33a7db804.jpg" width="300px" height="200px"  title="calendarRecurr" alt="calendarRecurr"></img>  <img src="https://user-images.githubusercontent.com/79836148/189159259-8c60dc84-1a77-4925-9c22-2ee742e777ca.jpg" width="300px" height="200px"  title="eventEditor" alt="eventEditor"></img> 
  <br/>
  
 일일과 정기 event 생성창의 모습과 편집창의 모습
 
   </div>

## Label

        오른쪽 + 표시로 Label을 생성할 수 있다.
        생성된 label은 label 목록에서 바로 불 수 있다.
        목록에서 label을 클릭하면 label에서 설정한 내용이 미리 들어간 event 생성창이 나온다
        label을 클릭하지 않아도 생성된 label은 event 생성창에서 지정할 수 있다.
        label 또한 편집모드에서는 정기와 일일을 오가는 label은 선택할 수 없다.



  <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189160638-5a043d45-969a-491d-8f8b-567c57304db7.jpg" width="300px" height="200px"  title="labelAdd" alt="labelAdd"></img> <img src="https://user-images.githubusercontent.com/79836148/189160714-aaeb3912-35b6-48b1-b62e-8ca7b0d25aad.jpg" width="300px" height="200px"  title="labelView" alt="labelView"></img>  
  <br/>
  label 생성창과 label목록의 모습
 
</div>

## Memo

        메모 view에서는 전체 메모를 볼 수 있고, 메모의 제목을 검색해서 찾을 수 있다.
        제목 검색 외에도 메모에 지정한 색깔별로 메모를 모아서 볼 수도 있다.
        메모를 클릭하면 해당 메모의 전체내용을 볼 수 있는 창이 나오고 편집과 삭제를 할 수 있다.
        중요 메모표시( 별표 )를 해둔 메모는 따로 side bar 에서 모아 볼 수 있다. 
        

