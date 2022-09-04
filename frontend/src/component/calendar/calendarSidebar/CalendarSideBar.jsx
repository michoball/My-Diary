import {
  SidebarContainer,
  CalendarBox,
  ListViewBox,
  SideBarWrapper,
} from "./CalendarSideBar.styles";

import CategoryView from "../categoryView/CategoryView";
import SidebarCalendar from "../calendars/sidebar/SidebarCalendar";

function CalendarSideBar() {
  return (
    <SideBarWrapper>
      <SidebarContainer>
        <CalendarBox>
          <SidebarCalendar />
        </CalendarBox>
        <ListViewBox>
          <CategoryView />
        </ListViewBox>
      </SidebarContainer>
    </SideBarWrapper>
  );
}

export default CalendarSideBar;
