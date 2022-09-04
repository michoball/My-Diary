import { Person } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user/user.thunk";
import { userReset } from "../../features/user/userSlice";
import { memoReset } from "../../features/memo/memoSlice";
import { calendarReset } from "../../features/calendar/calendarSlice";
import { BUTTON_TYPE_CLASSES } from "../../UI/button/button";
import { defaultProfile } from "../../assets/defaultProfile";
import {
  ProfileContainer,
  ProfileHeader,
  UserInfoContainer,
  UserAvatar,
  LogoutButton,
  UserAvatarContainer,
} from "./UserProfile.styles";

function UserProfile({ user }) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout()).then(() => {
      dispatch(userReset());
      dispatch(memoReset());
      dispatch(calendarReset());
    });
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <Person /> <h1>user</h1>
      </ProfileHeader>

      <UserInfoContainer>
        <UserAvatarContainer>
          <UserAvatar
            src={user.avatar ? user.avatar : defaultProfile}
            alt="userAvatar"
          />
        </UserAvatarContainer>
        <p>{user.displayName} Diary</p>

        <LogoutButton
          buttonType={BUTTON_TYPE_CLASSES.base}
          className="delete"
          onClick={logoutHandler}
        >
          Log out
        </LogoutButton>
      </UserInfoContainer>
    </ProfileContainer>
  );
}

export default UserProfile;
