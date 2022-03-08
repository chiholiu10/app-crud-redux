import React, { FC, memo } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { modalToggle } from "../../../actions";

export const EditButton: FC<EditProps> = () => {
  const dispatch = useDispatch();
  const OpenModal = () => {
    dispatch(modalToggle(true));
  };

  return (
    <div onClick={OpenModal}>
      Edit Button
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state.reducer);
  return {
    dataResult: state.reducer.result || []
  };
};

const connector = connect(mapStateToProps);
type EditProps = ConnectedProps<typeof connector>;
export default connector(memo(EditButton));