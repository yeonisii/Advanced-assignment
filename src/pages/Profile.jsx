import { useState, useEffect } from "react";
import styled from "styled-components";
import { updateProfile } from "../lib/api/auth";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-top: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
`;

export default function Profile({ user }) {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleUpdateProfile = async () => {
    console.log(nickname);
    console.log(avatar);

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await updateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };
  return (
    <Container>
      <h2>프로필 수정</h2>
      <InputGroup>
        <label htmlFor="nickname"></label>
        <input
          type="text"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
          onChange={(e) => setNickname(e.target.value)}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="avatar"></label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </InputGroup>
      <Button onClick={handleUpdateProfile}>프로필 업데이트</Button>
    </Container>
  );
}
