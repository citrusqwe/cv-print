import React, { useState } from 'react';
import styled from 'styled-components';
import AvatarImage from '../assets/avatar.png';

const Wrapper = styled.div`
  margin-right: 1rem;
  input {
    display: none;
  }
`;

const Image = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  cursor: pointer;
`;

const Avatar = () => {
  const [avatar, setAvatar] = useState(AvatarImage);

  const onAvatarClick = (val: File) => {
    const avatarURL = URL.createObjectURL(val);
    setAvatar(avatarURL);

    return () => URL.revokeObjectURL(avatarURL);
  };

  return (
    <Wrapper>
      <input
        id="avatar"
        type="file"
        value=""
        onChange={(e) => onAvatarClick(e.target.files![0])}
      />
      <label htmlFor="avatar">
        <Image src={avatar} alt="Avatar" />
      </label>
    </Wrapper>
  );
};

export default Avatar;
