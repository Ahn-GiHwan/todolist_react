import React from "react";
import { DoList, Loading } from "./style/style";

const Skeleton = () => {
  return (
    <DoList>
      <ul>
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
        <Loading />
      </ul>
    </DoList>
  );
};

export default Skeleton;
