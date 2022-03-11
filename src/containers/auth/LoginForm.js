import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../modules/auth";
import { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({ form: auth.login }));

  //인풋 변경 핸들러
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: "login",
        key: name,
        value,
      })
    );
  };

  // 폼 등록 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={handleChangeInput}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginForm;
