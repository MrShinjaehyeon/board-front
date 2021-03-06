import { Link } from "react-router-dom";
import styled from "styled-components";
import Palette from "../../lib/styles/Palette";
import Button from "../common/Button";

/* 회원가입 또는 로그인 폼을 보여줌. */

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${Palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

/* 스타일링된 input */

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${Palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${Palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

/* 홈 하단에 로그인 혹은 회원가입 링크를 보여 줌 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${Palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${Palette.gray[9]};
    }
  }
`;

const textMap = {
  login: "로그인",
  register: "회원가입",
};

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChange}
          value={form.username}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan fullWidth>
          {text}
        </ButtonWithMarginTop>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
