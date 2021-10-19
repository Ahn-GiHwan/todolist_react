import React from "react";

import { EmptyDoList } from "./style/style";

import { faGrinAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyDoListComponent = () => {
  console.log("empty");
  return (
    <EmptyDoList>
      <span>
        할 일을 추가해 주세요 <FontAwesomeIcon icon={faGrinAlt} />
      </span>
    </EmptyDoList>
  );
};

export default EmptyDoListComponent;
