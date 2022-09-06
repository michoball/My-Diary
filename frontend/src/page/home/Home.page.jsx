import { DefaultCalendar } from "../../utill/calendar/Calendar.config";
import { HOME_DEFAULT_MEMO, HOME_DEFAULT_EVENT } from "./HomeDefaultValue";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MemoCard from "../../component/memo/memoCard/MemoCard";
import UserProfile from "../../component/profile/UserProfile";
import Loading from "../../UI/loading/Loading";
import ThemeToggler from "../../component/toggleTheme/ThemeToggler";
import SignInForm from "../../component/auth/sign-in/SignIn";

import {
  selectUser,
  selectUserIsLoading,
} from "../../features/user/user.select";
import { selectCalendarEvents } from "../../features/calendar/calendar.select";
import { selectRecentOrderMemoLists } from "../../features/memo/memo.select";
import { userReset } from "../../features/user/userSlice";
import { getMemos } from "../../features/memo/memo.thunk";
import { getCalendars } from "../../features/calendar/calendar.thunk";

import { Calendar3, Journals, ThreeDots } from "react-bootstrap-icons";
import { ReactComponent as Mydiary } from "../../assets/Logo.svg";
import {
  HomeCalendar,
  HomeContainer,
  CalendarWrapper,
  HomeNavContainer,
  MemosContianer,
  MemosWrapper,
  NavContainer,
  NavNLoginContainer,
  RightSideContainer,
  NavLink,
  LoginContainer,
} from "./Home.styles";

function Home() {
  const dispatch = useDispatch();
  const eventList = useSelector(selectCalendarEvents);
  const memoLists = useSelector(selectRecentOrderMemoLists);
  const user = useSelector(selectUser);
  const userIsLoading = useSelector(selectUserIsLoading);
  const [memoCards, setMemoCards] = useState([]);

  useEffect(() => {
    if (user?._id) {
      dispatch(getMemos());
      dispatch(getCalendars());
      dispatch(userReset());
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (memoLists.length !== 0) {
      changeMemoList(memoLists);
    } else {
      changeMemoList(HOME_DEFAULT_MEMO);
    }
  }, [memoLists]);

  const changeMemoList = (list) => {
    setMemoCards(list.length > 7 ? list.slice(0, 7) : list);
  };

  const moreLinkIconHandler = (event) => {
    event.text = <ThreeDots />;
  };

  return (
    <HomeContainer>
      <HomeNavContainer>
        <Link to="/">
          <Mydiary className="logo"></Mydiary>
        </Link>
        <ThemeToggler />
      </HomeNavContainer>
      <main>
        <HomeCalendar>
          <CalendarWrapper>
            <DefaultCalendar
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev",
                center: "title",
                right: "next",
              }}
              events={eventList.length !== 0 ? eventList : HOME_DEFAULT_EVENT}
              titleFormat={{
                year: "numeric",
                month: "long",
              }}
              editable={true}
              dayMaxEvents={true}
              moreLinkContent={moreLinkIconHandler}
            />
          </CalendarWrapper>
        </HomeCalendar>
        <RightSideContainer>
          <MemosContianer>
            <h1>Memo</h1>
            <MemosWrapper>
              {memoCards.map((memoList) => {
                return (
                  <MemoCard
                    key={memoList._id}
                    memoInfo={memoList}
                    home={true}
                  />
                );
              })}
            </MemosWrapper>
          </MemosContianer>
          <NavNLoginContainer>
            <NavContainer>
              <h1>Navigation</h1>
              <NavLink to="/calendar">
                <Calendar3 />
                Calendar
              </NavLink>
              <NavLink to="/memo">
                <Journals />
                Memo
              </NavLink>
            </NavContainer>
            <LoginContainer>
              {userIsLoading ? (
                <Loading />
              ) : (
                <>{user ? <UserProfile user={user} /> : <SignInForm />}</>
              )}
            </LoginContainer>
          </NavNLoginContainer>
        </RightSideContainer>
      </main>
    </HomeContainer>
  );
}

export default Home;
