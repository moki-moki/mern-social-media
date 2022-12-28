import styled from "styled-components";

export const SinglePostCommentBtn = styled.button`
  font-size: 1.5em;
  cursor: pointer;
  padding: 0.2em;
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.text};
  transition: 0.2s ease all;
  margin: 0 0.3em;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    border-radius: 10px;
  }
`;

export const SinglePostPostedBy = styled.span`
  color: ${({ theme }) => theme.colors.heading};
`;

export const SinglePostUsername = styled.p`
  color: ${({ theme }) => theme.colors.heading};
  font-weight: bold;
`;
