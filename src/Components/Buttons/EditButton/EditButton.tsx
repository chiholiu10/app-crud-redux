import React, { FC } from "react";
import { EditButtonComponent } from "./EditButton.styles";

type editPropsOne = {
  editCurrentItem: (event: React.MouseEvent<HTMLElement>) => void;
};

export const EditButton: FC<editPropsOne> = ({ editCurrentItem }) => {

  return (
    <EditButtonComponent onClick={editCurrentItem}>
      Edit Button
    </EditButtonComponent>
  );
};
