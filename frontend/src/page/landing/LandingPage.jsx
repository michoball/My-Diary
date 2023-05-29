import {
  PageContainer,
  LandNavBarContainer,
  MainAppDisplayContainer,
  SectionContainer,
  ImgContainer,
  ContentContainer,
  LinkContainer,
  LabelDisplay,
  MemoDisplay,
  FooterContainer,
} from "./LandingPage.styles";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";

// webp
import calendarPage from "../../assets/webp/calendarPage.webp";
import calendarDnD from "../../assets/webp/calendarDnD.webp";
import calendarDaliy from "../../assets/webp/calendarDaliy.webp";
import calendarRecurr from "../../assets/webp/calendarRecurr.webp";
import memoPage from "../../assets/webp/memoPage.webp";
import memoColor from "../../assets/webp/memoColor.webp";
import memoColorBtn from "../../assets/webp/memoColorBtn.webp";
import memoMajor from "../../assets/webp/memoMajor.webp";
import memoSearch from "../../assets/webp/memoSearch.webp";
import memoSearchBtn from "../../assets/webp/memoSearchBtn.webp";
import memoEditing from "../../assets/webp/memoEditing.webp";
import memoEditPreview from "../../assets/webp/memoEditPreview.webp";
import calendarWeek from "../../assets/webp/calendarWeek.webp";
import labelAdd from "../../assets/webp/labelAdd.webp";
import homeImg from "../../assets/webp/mainPage.webp";
import holidayImg from "../../assets/webp/holidayImg.webp";
import memoEditPage from "../../assets/webp/memoEditPage.webp";
import memoPreview from "../../assets/webp/memoPreview.webp";

import { Link, useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../../UI/button/button";
import { useRef, useState, useEffect } from "react";
import Slider from "../../UI/slider/Slider";
import { useDispatch } from "react-redux";
import { login } from "../../features/user/user.thunk";
import axios from "axios";

const calendarSwiperImg = [
  calendarPage,
  calendarWeek,
  calendarDaliy,
  calendarRecurr,
];

const memoSwiperImg = [memoPage, memoEditPage, memoPreview, memoEditing];

const demoModeUser = [
  {
    email: "testEmail@gmail.com",
    password: "asdfasdf",
  },
  {
    email: "aaa@aaa.com",
    password: "asdfasdf",
  },
  {
    email: "bbb@bbb.com",
    password: "asdfasdf",
  },
];

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollRef = useRef();
  const startNav = () => {
    if (window.scrollY > 468) {
      setIsScrolling(true);
    } else if (window.scrollY < 460) {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem("user"));
    if (currentUser) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", startNav);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", startNav);
    };
  }, []);

  const demoModeHandler = async () => {
    const ranNum = Math.floor(Math.random() * 3);
    const selectedDemoUser = demoModeUser[ranNum];
    dispatch(login(selectedDemoUser));
    navigate("/home");
  };

  return (
    <PageContainer>
      <LandNavBarContainer className={isScrolling ? "active" : ""}>
        <Mydiary className="logo" />
        <LinkContainer>
          <button className="demo" onClick={demoModeHandler}>
            데모모드
          </button>
          <Link to="/login">회원가입</Link>
          <Link to="/home" className="start">
            <Button buttonType={BUTTON_TYPE_CLASSES.base}>시작하기</Button>
          </Link>
        </LinkContainer>
      </LandNavBarContainer>

      <MainAppDisplayContainer>
        {/* -----------------  main section -------------------- */}
        <SectionContainer className="section-main">
          <ImgContainer className="main-display">
            <img src={homeImg} alt="main-display" />
          </ImgContainer>
          <ContentContainer className="main-content">
            <h3>
              나만의
              <br /> 다이어리를 <br /> 만들어 보세요
            </h3>
          </ContentContainer>
        </SectionContainer>
        {/* -----------------  calendar section -------------------- */}

        <SectionContainer className="section-calendar">
          <ContentContainer className="calendar-content">
            <h3>캘린더</h3>
            <p>
              모드에서는 <br />
              쉽게 일정을 추가하고 <br /> 편집할 수 있습니다.
            </p>
          </ContentContainer>
          <ImgContainer className="calendar-display">
            <Slider imgSource={calendarSwiperImg} />
          </ImgContainer>
        </SectionContainer>

        {/* -----------------  label section -------------------- */}

        <SectionContainer className="section-label" ref={scrollRef}>
          <div className="labelWrapper">
            <LabelDisplay>
              <ImgContainer className="label-display">
                <img src={calendarDnD} alt="label-display" />
              </ImgContainer>
              <ContentContainer className="label-content">
                <p>
                  만든 일정을 드래그 또는 클릭하여
                  <br /> 일정을 변경하세요.
                </p>
              </ContentContainer>
            </LabelDisplay>
            <LabelDisplay>
              <ImgContainer className="label-display">
                <img src={labelAdd} alt="label-display" />
              </ImgContainer>
              <ContentContainer className="label-content">
                <p>
                  라벨링 기능으로 일정을 미리 만들어 <br /> 간편하게
                  이용해보세요
                </p>
              </ContentContainer>
            </LabelDisplay>
            <LabelDisplay>
              <ImgContainer className="label-display">
                <img src={holidayImg} alt="label-display" />
              </ImgContainer>
              <ContentContainer className="label-content">
                <p>
                  휴일지정 버튼으로
                  <br /> 휴일도 만들 수 있습니다.
                </p>
              </ContentContainer>
            </LabelDisplay>
          </div>
        </SectionContainer>

        {/* -----------------  memo section -------------------- */}

        <SectionContainer className="section-memo">
          <ImgContainer className="memo-display">
            <Slider imgSource={memoSwiperImg} />
          </ImgContainer>
          <ContentContainer className="memo-content">
            <h3>메모</h3>
            <p>
              모드에서 <br />
              메모를 작성하고 <br />
              중요표시와 색깔을 남기세요.
            </p>
          </ContentContainer>
        </SectionContainer>

        {/* -----------------  memo info section -------------------- */}

        <SectionContainer className="section-memoInfo">
          <div className="memoInfo-wrapper">
            <MemoDisplay>
              <ImgContainer className="memoInfo-display">
                <img src={memoSearch} alt="memoInfo-display" />
                <img
                  src={memoSearchBtn}
                  className="memo-sub"
                  alt="memoInfo-display"
                />
              </ImgContainer>
              <ContentContainer className="memoInfo-content">
                <p>
                  검색기능으로 메모를 찾거나 <br />
                  색깔별로 메모를 찾아보세요.
                </p>
              </ContentContainer>
            </MemoDisplay>
            <MemoDisplay>
              <ImgContainer className="memoInfo-display">
                <img src={memoColor} alt="memoInfo-display" />
                <img
                  src={memoColorBtn}
                  className="memo-sub"
                  alt="memoInfo-display"
                />
              </ImgContainer>
              <ContentContainer className="memoInfo-content">
                <p>
                  검색기능으로 메모를 찾거나 <br />
                  색깔별로 메모를 찾아보세요.
                </p>
              </ContentContainer>
            </MemoDisplay>
            <MemoDisplay>
              <ImgContainer className="memoInfo-display">
                <img src={memoMajor} alt="memoInfo-display" />
              </ImgContainer>
              <ContentContainer className="memoInfo-content">
                <p>
                  중요한 메모는 <br />
                  별표시로 표시해두세요
                </p>
              </ContentContainer>
            </MemoDisplay>
            <MemoDisplay>
              <ImgContainer className="memoInfo-display">
                <img src={memoEditPreview} alt="memoInfo-display" />
              </ImgContainer>
              <ContentContainer className="memoInfo-content">
                <p>
                  작성중인 메모도 <br />
                  미리보기로 볼 수 있습니다.
                </p>
              </ContentContainer>
            </MemoDisplay>
          </div>
        </SectionContainer>

        <SectionContainer className="section-end">
          <ContentContainer className="end-content">
            <h3>지금 바로 시작하세요</h3>
            <Link to="/home" className="start">
              <Button buttonType={BUTTON_TYPE_CLASSES.base}>시작하기</Button>
            </Link>
          </ContentContainer>
        </SectionContainer>
      </MainAppDisplayContainer>
      <FooterContainer>
        <Mydiary className="logo" />
        <p>Copyright &copy; 2022 All rights reserved</p>
      </FooterContainer>
    </PageContainer>
  );
}

export default LandingPage;
