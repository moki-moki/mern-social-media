import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  margin: 0 auto;
  width: 50%;
  height: 100%;
  border-radius: 15px;

  @media (max-width: 910px) {
    width: 80%;
  }

  @media (max-width: 590px) {
    width: 90%;
  }
`;

export const PostCardContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2em 0;
  width: 100%;
`;

export const PostCardUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const PostCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0;
  padding: 0 1em;
  transition: 0.2s ease background;
`;

export const PostCardUserInfo = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.3em;
  border-radius: 10px;
  transition: 0.2s ease all;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.heading};
    background: ${({ theme }) => theme.colors.hoverOverlay};
  }
`;

export const PostCardProfileLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const PostCardDesc = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3em;
  margin: 1em 0;
  padding: 0 1em;
  width: 100%;
  transition: 0.2s ease background;
`;

export const PostCardUserImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin: 0 5px;
`;

export const PostCardBottomBar = styled.div`
  padding: 0.5em;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.heading};
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const PostCardBtnContainer = styled.div`
  width: 100%;
`;

export const PostCardButtonDelete = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.editBtn};
  padding: 0.2em;
  font-size: 1.5em;
  transition: 0.2s ease all;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.editBtn};
  }
  &:active {
    background: ${({ theme }) => theme.colors.editBtn};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.editBtn};
  }
`;

export const PostCardButtonsDislike = styled.button`
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.2em;
  background: ${({ isDisliked }) => (isDisliked ? "#ff3860" : "none")};
  border: 1px solid ${({ theme }) => theme.colors.redBtn};
  transition: 0.2s ease all;
  margin: 0 0.3em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.redBtn};
    border-radius: 10px;
  }
`;

export const PostCardButtonsLike = styled.button`
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.2em;
  background: ${({ isLiked }) => (isLiked ? "#09c372" : "none")};
  border: 1px solid ${({ theme }) => theme.colors.greenBtn};
  transition: 0.2s ease all;
  margin: 0 0.3em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: ${({ theme }) => theme.colors.greenBtn};
    border-radius: 10px;
  }
`;

export const PostCardLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0.2em;
  transition: 0.3s ease all;
  width: 100%;
  display: inline-block;
  border-radius: 10px;
  &:hover {
    color: ${({ theme }) => theme.colors.heading};
    background: ${({ theme }) => theme.colors.hoverOverlay};
  }
`;

export const PostCardDescContainer = styled.p`
  &:hover {
    background: ${({ theme }) => theme.colors.hoverOverlay};
    transition: 0.2s ease background;
  }
`;

export const PostCardHeader = styled.span`
  color: ${({ theme }) => theme.colors.heading};
  margin: 0 0.3em;
`;
