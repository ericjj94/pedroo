import styled from "styled-components";

export const NameStyle = styled.b`
  cursor: pointer;
`;

export const TitleStyle = styled.h2`
  margin: 15px 0;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 260px;
  width: 300px;
`;

export const ButtonStyle = styled.button`
  background-color: #0072e4;
  color: white;
  padding: 1em 1.5em;
  -webkit-text-decoration: none;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  margin: 2rem 0;
  min-width: 50px;
`;

export const MainSectionStyled = styled.div`
  background-color: #f8f9fa;
  padding-top: 1rem;
  padding-left: 1rem;
`;

interface SmallButtonInterface {
  info?: string;
}
export const SmallButtonStyle = styled.button<SmallButtonInterface>`
  display: inline-flex;
  flex-grow: 0;
  background-color: ${({ info }: SmallButtonInterface) => (info !== "danger" ? "#f8f9fa" : "red")};
  color: ${({ info }: SmallButtonInterface) => (info !== "danger" ? "#000" : "#fff")};
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 16px;
  height: 28px;
  min-width: 50px;
  width: auto;
  padding: 0 16px;
`;
