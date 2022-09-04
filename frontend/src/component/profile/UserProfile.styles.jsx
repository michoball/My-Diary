import styled from "styled-components";
import Button from "../../UI/button/button";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding-bottom: 5px;
`;

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0 20px;

  svg {
    fill: #f2727d;
    font-size: 30px;
    margin-right: 5px;
  }
`;
export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80%;
  p {
    margin-bottom: 5px;
  }
`;
export const UserAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const UserAvatar = styled.img`
  width: 70px;
  height: 70px;

  border-radius: 50%;
`;

export const LogoutButton = styled(Button)`
  border: none;
  height: 40px;
  width: 70%;
`;
