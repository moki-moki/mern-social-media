import styled from "styled-components";

export const AboutMainContainer = styled.div`
  max-width: 1140px;
  margin: 1em auto;
  width: 100%;
`;

export const AboutHeadingWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.heading};
  margin-bottom: 1em;
`;

export const AboutHeading = styled.h1`
  color: ${({ theme }) => theme.colors.orangeBtn};
  margin-bottom: 1em;
  width: 100%;
`;

export const FaqContainer = styled.div`
  width: 50%;

  @media (max-width: 610px) {
    width: 80%;
  }

  @media (max-width: 432px) {
    width: 100%;
  }
`;

export const FaqHeading = styled.h4`
  font-weight: 400;
  font-size: 1.5em;
`;

export const FaqQuestionsContainer = styled.div`
  padding: 1em;
`;

export const FaqQuestion = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.heading};
  display: inline;
`;

export const AboutContactContainer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.heading};
  margin: 1em 0;
`;
