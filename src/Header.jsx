import React from "react";

import { Header, ListIcon, Title } from "./style/style.js";

import { faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderComponent = () => {
  return (
    <Header>
      <ListIcon>
        <FontAwesomeIcon icon={faThList} />
      </ListIcon>
      <Title>TODO LIST</Title>
    </Header>
  );
};

export default HeaderComponent;
