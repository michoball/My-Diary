
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


## 목록

[기술 스택](#기술스택)<br/>
[app 기능의 특징](#웹-기능)<br/>
[코드 이슈](#코드-이슈-및-트러블-슈팅)<br/>


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

[Home](#home)<br/>
[Login](#login)<br/>
[Calendar](#calendar)<br/>
[Memo](#memo)<br/>



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
  
 - Calendar는 월별 보기와 주별 보기가 지원되고, 화살표로 월과 주단위 이동이 가능하다.
 - 생성 버튼으로 event를 생성하고, 휴일버튼으로 휴무일을 지정할 수 있다.
 - 생성된 event는 main view에서 drag & drop으로 수정가능하고, 클릭해서 상세하게 수정도 가능하다.
 - Label 창에 자신만의 일정을 분류하는 라벨을 만들어 쉽고 빠르게 event를 생성할 수 있다.
 - Side calendar는 event 표시기능만 지원한다.
   
   
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

- 오른쪽 + 표시로 Label을 생성할 수 있다.
- 생성된 label은 label 목록에서 바로 불 수 있다.
- 목록에서 label을 클릭하면 label에서 설정한 내용이 미리 들어간 event 생성창이 나온다
- label을 클릭하지 않아도 생성된 label은 event 생성창에서 지정할 수 있다.
- label 또한 편집모드에서는 정기와 일일을 오가는 label은 선택할 수 없다.



  <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189160638-5a043d45-969a-491d-8f8b-567c57304db7.jpg" width="300px" height="200px"  title="labelAdd" alt="labelAdd"></img> <img src="https://user-images.githubusercontent.com/79836148/189160714-aaeb3912-35b6-48b1-b62e-8ca7b0d25aad.jpg" width="300px" height="200px"  title="labelView" alt="labelView"></img>  
  <br/>
  label 생성창과 label목록의 모습
 
</div>

## Memo

- 메모 view에서는 전체 메모를 볼 수 있고, 메모의 제목을 검색해서 찾을 수 있다.
- 제목 검색 외에도 메모에 지정한 색깔별로 메모를 모아서 볼 수도 있다.
- 메모를 클릭하면 해당 메모의 전체내용을 볼 수 있는 창이 나오고 편집과 삭제를 할 수 있다.
- 중요 메모표시( 별표 )를 해둔 메모는 따로 side bar 에서 모아 볼 수 있다. 
        
        
  <div align="center">

  <img src="https://user-images.githubusercontent.com/79836148/189370047-95955bef-d236-4265-898d-2b399e6787ac.jpg" width="300px" height="200px"  title="memoPage" alt="memoPage"></img> <img src="https://user-images.githubusercontent.com/79836148/189370179-b07fe680-8dc7-48e8-829d-0fd7e031ef9b.jpg" width="300px" height="200px"  title="memoPreview" alt="memoPreview"></img>  
  <br/>
  매모 창과 메모 클릭 시 보이는 창
  </div>
  
 <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189370650-7ce57cd3-864c-414a-8b36-007603bdb387.jpg" width="300px" height="200px"  title="memoSearch" alt="memoSearch"></img> <img src="https://user-images.githubusercontent.com/79836148/189370770-728a05e6-6b1c-4fa0-b4f8-f053f7d8dbaa.jpg" width="300px" height="200px"  title="memoColor" alt="memoColor"></img>  
  <br/>
  메모 검색하는 모습과 색깔 별로 보는 
 
</div>

     
   * Memo Create & Edit
    
      - Memo를 생성하고 편집하는 페이지는 똑같다.
      - Memo창 side bar에서 New Memo로 새 메모를 만들 수 있고, 메모를 클릭하면 나오는 Edit으로 편집창으로 갈 수 있다.
      - Memo Creat & Edit 창에서는 메모의 제목, 색, 중요표시 등을 할 수 있다.
      - 현재 메모 에디터는 draftjs의 기본적인 기능만을 제공한다.
      - PreView로 작성 중인 메모를 미리 볼 수 있고, Delete로 삭제할 수 있다.

   
   <div align="center">
  <img src="https://user-images.githubusercontent.com/79836148/189373691-4ebd7e05-04be-479a-b933-ad469c603dfb.jpg" width="300px" height="200px"  title="memoEditorView" alt="memoEditorView"></img> 
  <img src="https://user-images.githubusercontent.com/79836148/189373561-31bfe3f8-b994-4724-beb8-ea4e91edfa04.jpg" width="300px" height="200px"  title="memoEditing" alt="memoEditing"></img>  <img src="https://user-images.githubusercontent.com/79836148/189373909-fd7cbc53-3c3d-4114-a660-bb6ebbca6e15.jpg" width="300px" height="200px"  title="memoMajor" alt="memoMajor"></img> 
  <br/>
 
 새 메모와 편집중인 메모 창 및 중요표시 모습
 
   </div>
  <br/>
  <br/>
 
 
 # 코드 이슈 및 트러블 슈팅
 
[Front-end](#front-end)<br/>
[Back-end](#back-end)<br/>


 
 ## Front-end

   * Redux-toolkit의 비동기 처리 순서
  
      >  Navigation Bar와 Home Page에서 유저 로그아웃을 할 때 로그아웃 후에 유저의 data 정보를 reset하도록 하였다.  <br/>
      >  이때 Action Diapatch를 하나의 function안에서 여러개(logout, calendar, label, memo) 진행하게 되면서
      >  비동기 처리의 순서가 없어서 로그아웃 후에도 유저의 data가 남아있는 경우가 발생했다.  <br/>
      >  이전 프로젝트 [video-chat-cpp](https://video-chat-app-neon.vercel.app/)에서는 redux-saga로 진행해서 
      >  Action의 순서를 조정할 수 있었는데 toolkit에서는 createAsyncThunk 만으로는 할 수 없었다.  <br/>
      >  문제는 고심했던 것과는 의외로 간단히 Action을 then체인으로 묶어서 해결할 수 있었다.  <br/>
  
  <br/>
  
  ```js
   const logoutHandler = () => {
    dispatch(logout())
      .then(() => {
        dispatch(userReset());
        dispatch(memoReset());
        dispatch(calendarReset());
        dispatch(labelReset());
      })
      .then(() => navigate("/home"));
  };
  ```
  
          Promise then 구문을 찾아보면서 dispatch then 구문에 대해서 공식문서에 나와있는 글이 있다는 사실을 알았다.
          공식문서에서도 dispatch Action처리시 thunk에서 response 값을 리턴하는 경우 dispatch then으로 값을 다룰 수 있다고 나와있어서 위의 해결이 맞음을 확인했다.
          공식문서를 좀 더 살펴봐야겠다. ㅠㅠ   
        
 
 redux-toolkit의 공식문서 글 [Handling Thunk Results](https://redux-toolkit.js.org/api/createAsyncThunk#handling-thunk-results)
          
          
          
  <br/>
  
   * TimeConvertor
  
      >  Fullcalendar는 들어오는 event의 date를 다루는 방식이 특이하다. <br/>
      >  event가 끝나는 시간과 날짜가 allDay(종일)event일 경우 끝나는 날짜가 다음날 00시로 이동한다.<br/>
      >  이 값을 조정하지 않고 그대로 서버에 저장하고 불러오기를 하면 event의 날짜가 변하게된다.<br/>
      >  또한 mongoDB로 보내진 event의 date를 Date 값으로 저장하니 UTC와 local 시간차가 반영이 되어 이또한 event 값을 변화시켰다.<br/>
      >  DB에 저장될 때는 Date값이 아닌 String값으로 저장을 하는 방식으로 해결하였고, Event end값은 TimeConvertor를 만들어 해결했다.<br/>
  
  
  <br/>
  
  ```js
  //날짜값만 가져오는 함수
 export const DayConvertor = (day) => {
  const dayConvert = day.split("T")[0];
  return dayConvert;
};

  //시간값만 가져오는 함수
export const TimeConvertor = (time) => {
  const timeConvert = time.split("T")[1].slice(0, 5);
  return timeConvert;
};

  //End Time값 변환함수
export const EndDayConvertor = (end) => {
  const newEndValue = (new Date(end).getDate() - 1).toString();

  const endDayConvert = end
    ? end.slice(0, 7) +
      "-" +
      (Number(newEndValue) < 10 ? `0${newEndValue}` : newEndValue) +
      "T24:00"
    : null;
  return endDayConvert;
};
  ```
  
<br/>
  
   * 요일 선택기 DayPicker 와 label 선택기의 Event & Label 내용 받기
  
      >  요일 선택기 DayPicker는 정기 일정 생성기에서 반복하고 싶은 요일을 정할 때 쓰이고<br/>
      >  label 선택기는 Event 생성기과 편집기 그리고 label을 클릭할 때 작용한다.<br/>
      >  위의 기능들은 label 또는 event를 클릭하면 해당 event에 들어가있는 label이나 요일의 값을 event 편집기에 넣어주는 일을 한다.<br/>
      >  label을 클릭할 때인지 event를 클릭할 때인지 또 event가 label을 가지고 있는지에 따라 값을 구분할수 있어야했고<br/>
      >  이를 위해 useEffect를 두개를 사용해서 값을 인식하고 넣을 수 있도록 했다.<br/>
  
  <br/>
  
  ```js
  //DayPicker에서 event , label에 따른 요일값
   useEffect(() => {
   //label을 클릭했을 때
    if (!selectEvent && selectedLabel && selectedLabel.daysOfWeek) {
       //label에 있는 요일 값과 맞는 요일 input에 check표시하기
      for (let i = 0; i < selectedLabel.daysOfWeek.length; i++) {
        if (selectedLabel.daysOfWeek[i] === String(week.id)) {
          dayCheckRef.current.checked = true;
          setChecked(true);
          onCheckBoxChange(dayCheckRef.current);
        }
      }
    }
  }, [selectedLabel, week, onCheckBoxChange, selectEvent]);
  
   //event을 클릭했을 때
  useEffect(() => {
    if (selectEvent && selectEvent.daysOfWeek) {
    //event에 있는 요일 값과 맞는 요일 input에 check표시하기
      for (let i = 0; i < selectEvent.daysOfWeek.length; i++) {
        if (selectEvent.daysOfWeek[i] === String(week.id)) {
          dayCheckRef.current.checked = true;
          setChecked(true);
          onCheckBoxChange(dayCheckRef.current);
        }
      }
    }
  }, [selectEvent, week, onCheckBoxChange]);

  ```
  
   ## Back-end

   * 로그인 인증과 oAuth
  
      > 이전 프로젝트에서 Firebase를 이용해서 유저 Authentication을 구현한 적이 있었는데, 이때 firebase에서 지원하는 google OAuth를 사용한 적이 있었다.<br/>
      > 이번 프로젝트에서 kakao와 naver도 지원하는 login를 구현하고 싶었다. <br/>
      > nodejs에 인증시스템 구현을 위한 미들웨어 Passportjs를 이용하였다. <br/>
      > Passport 문서를 참고해 session으로 oAuth를 구현하게 되었다. <br/>
      > 본 프로젝트에서는 이미 jwt를 이용해 유저 인증과 route를 보호하는 미들웨어를 구현한터라<br/>
      > oAuth 유저들의 route를 보호하는 부분이 적용되지 않는 문제가 있었다.<br/>
      > 백엔드에 대한 공부가 아직 부족한탓에 이번에는 session을 oAuth유저 인증에만 사용하고<br/>
      > 이후 jwt을 같이 넣어주어서 미들웨어를 사용한 방식으로 해결했다. 나중에 좀 더 공부를 한 후에 수정하도록 해야겠다.
  <br/>
      
```js

// jwt토큰을 이용한 유저 인증 middleware
// 유저가 생성될때 각 유저에게 고유의 토큰을 발급해줘서
// 서버에서 calendar, label, memo 통신시 유저의 data만을 가져오고
// 다른 유저의 data를 쓰지못하게 보호해주는 역할을 한다.
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // 헤더에서 토큰 가져오기
      token = req.headers.authorization.split(" ")[1];
      // 토큰 검증
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // 토큰으로부터 유저 가져오기
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized");
  }
});

```
  
# Todo 리스트 

 - [x] DayPicker 기능 수정
 - [ ] TypeScript로 변환
