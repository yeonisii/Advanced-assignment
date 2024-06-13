import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../lib/api/auth";

//커밋 추가

const LoginBox = styled.div`
  max-width: 800px;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const LoginTitle = styled.h2`
  color: #232323;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`;

const LoginInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;

  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 15px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #898989;
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
`;

const JoinButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #454545;
  color: #fff;
  font-size: 15px;
  margin-bottom: 10px;
  border: none;
  border-radius: 1px;
  cursor: pointer;
`;

function Login({ setUser }) {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const { userId, nickname, avatar } = await login({
      id: userid,
      password: password,
    });
    alert("로그인이 완료되었습니다.🙂");
    setUser({ userId, nickname, avatar });
    navigate("/");

    if (userid.length < 4 || userid.length > 10) {
      alert("아이디는 4~10글자 이내로만 가능합니다");
      return;
    }

    if (password.length < 4 || password.length > 10) {
      alert("비밀번호는 4~15글자 이내로만 가능합니다");
      return;
    }
  };

  return (
    <LoginBox>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm>
        <LoginInput
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        <JoinButton onClick={() => navigate("/signup")}>회원가입</JoinButton>
      </LoginForm>
    </LoginBox>
  );
}

export default Login;
