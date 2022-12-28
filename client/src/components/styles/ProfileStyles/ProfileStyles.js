import styled from "styled-components";

export const ProfileCardMainContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 704px) {
    width: 80%;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const ProfileCardContainer = styled.div`
  width: 36%;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.cardBg};
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;

  @media (max-width: 1092px) {
    width: 40%;
  }

  @media (max-width: 910px) {
    width: 60%;
  }

  @media (max-width: 704px) {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const ProfileFriendContainer = styled.div`
  width: 14%;
  background: ${({ theme }) => theme.colors.cardBg};
  margin-left: 0.3em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;

  @media (max-width: 1092px) {
    width: 20%;
  }

  @media (max-width: 704px) {
    width: 100%;
    border-radius: 0px 0px 10px 0px;
    margin-left: 0;
  }
`;

export const ViewFriendsBtn = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.orangeBtn};
  border-radius: 10px;
  padding: 0.3em;
  margin: 0.3em 0;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, border-radius;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-radius: 0;
    color: ${({ theme }) => theme.colors.heading};
  }

  @media (max-width: 530px) {
    margin: 0.3em 0;
  }
`;

export const ProfileInfoContainer = styled.div`
  grid-column: 2/4;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 468px) {
    grid-column: 1;
  }
`;

export const ProfilePictureContainer = styled.div`
  position: relative;
`;

export const ProfilePictureWrapper = styled.div`
  position: relative;
  border-radius: 50%;
  width: 50%;
`;

export const ProfilePicture = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 5px;
`;

export const ProfileDesc = styled.div`
  grid-column: 2/4;
`;

export const EditBtn = styled.div`
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.colors.orangeBtn};
  border-radius: 10px;
  padding: 0.3em;
  font-size: 1.2em;
  width: max-content;
  cursor: pointer;
  transition: 0.3s ease border-radius;

  &:hover {
    border-radius: 0;
  }

  &:hover h5:nth-child(1) {
    color: ${({ theme }) => theme.colors.heading};
  }

  & h5:nth-child(1) {
    transition: 0.3s ease color;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 530px) {
    margin: 0.3em 0;
  }
`;

export const ProfileBtns = styled.div`
  display: flex;
  align-items: center;
  margin: 0.3em 0;

  @media (max-width: 530px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const AddFriendBtn = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.greenBtn};
  border-radius: 10px;
  padding: 0.3em;
  margin: 0.3em 0;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, border-radius;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-radius: 0;
    color: ${({ theme }) => theme.colors.heading};
  }

  @media (max-width: 530px) {
    margin: 0.3em 0;
  }
`;

export const RemoveFriendBtn = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.redBtn};
  border-radius: 10px;
  padding: 0.3em;
  margin: 0.3em 0;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.3s ease;
  transition-property: color, border-radius;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-radius: 0;
    color: ${({ theme }) => theme.colors.heading};
  }

  @media (max-width: 530px) {
    margin: 0.3em 0;
  }
`;
