import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../lib/api/auth";

const JoinBox = styled.div`
  max-width: 800px;
  height: 450px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const JoinTitle = styled.h2`
  color: #232323;
  font-size: 25px;
  text-align: center;
  margin-top: 2rem;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
`;

const JoinInput = styled.input`
  width: 300px;
  height: 50px;
  margin-bottom: 20px;

  border: 1px solid #b4b9c9;
  color: #343434;
  font-size: 15px;
  padding-left: 10px;
  box-sizing: border-box;
`;

const JoinButton = styled.button`
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

const LoginBtn = styled.button`
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

function SignUp() {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("userid:", userid);
    console.log("password", password);
    console.log("nickname", nickname);

    if (userid.length < 4 || userid.length > 10) {
      alert("아이디는 4~10글자 이내로만 가능합니다");
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4~15글자 이내로만 가능합니다");
      return;
    }

    if (nickname.length < 1 || userid.length > 10) {
      alert("닉네임은 1~10글자 이내로만 가능합니다");
      return;
    }

    const response = await register({
      id: userid,
      password: password,
      nickname: nickname,
    });
    if (response) {
      confirm("회원가입이 완료되었습니다!");
      navigate("/login");
    }
  };

  return (
    <JoinBox>
      <JoinTitle>회원가입</JoinTitle>
      <JoinForm>
        <JoinInput
          type="text"
          placeholder="아이디"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
        />
        <JoinInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <JoinInput
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <JoinButton onClick={handleSignUp}>회원가입</JoinButton>
      </JoinForm>
      <LoginBtn onClick={() => navigate("/login")}>로그인</LoginBtn>
    </JoinBox>
  );
}

export default SignUp;
