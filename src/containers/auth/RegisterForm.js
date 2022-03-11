import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm, register } from "../../modules/auth";
import { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError,
  }));

  //인풋 변경 핸들러
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "register",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      // 오류처리
      return;
    }
    dispatch(register({ username, password }));
  };

  // 컴포넌트가 처음 그리고 재렌더링 될 때 form 초기화
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공 실패 처리
  useEffect(() => {
    if (authError) {
      console.log("오류발생");
      console.log(authError);
      return;
    }
    if (auth) {
      console.log("회원가입성공");
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterForm;
