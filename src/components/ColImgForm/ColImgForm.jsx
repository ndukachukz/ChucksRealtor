import styled from "styled-components";

const BgStyled = styled.div`
  background-image: url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80");
`;
const ColImgForm = (props) => {
  return <BgStyled className="hidden bg-cover lg:block lg:w-1/2"></BgStyled>;
};

export default ColImgForm;
