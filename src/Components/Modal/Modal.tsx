import { FC, memo } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { editText, modalToggle, passModalData } from "../../actions";
import { Modal } from "../Modal/Modal.styles";

export const ModalBlock: FC<ModalProps> = ({ modalData }) => {
  const dispatch = useDispatch();
  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    dispatch(passModalData({
      ...modalData,
      name: newValue
    }));
  };

  const getUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    dispatch(passModalData({
      ...modalData,
      username: newValue
    }));
  };

  const confirmChange = () => {
    dispatch(editText(
      modalData.id,
      modalData.name,
      modalData.username
    ));
  };

  const closeModal = () => dispatch(modalToggle(false));

  return (
    <Modal isOpen={true}>
      <input type="text" value={modalData.name} onChange={(event) => getName(event)} />
      <input type="text" value={modalData.username} onChange={(event) => getUsername(event)} />
      <button onClick={() => closeModal()} >Cancel</button>
      <button onClick={() => {
        confirmChange();
        closeModal();
      }}>Save</button>
    </Modal>
  );
};

const mapStateToProps = (state: any) => {

  return {
    modalData: state.reducer.inputValue || []
  };
};

const connector = connect(mapStateToProps);
type ModalProps = ConnectedProps<typeof connector>;
export default connector(memo(ModalBlock));