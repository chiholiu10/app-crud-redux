import React, { FC, memo } from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { editText, modalToggle, passModalData } from "../../actions";
import { Modal, ModalBlockButton, ModalBlockButtonContainer, ModalButtonClose, ModalButtonGeneral, ModalContainer, ModalInputName, ModalInputUsername } from "../Modal/Modal.styles";

export const ModalBlock: FC<ModalProps> = ({ modalData, modalToggling }) => {
  const dispatch = useDispatch();
  const getName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = e.target.value;
    dispatch(passModalData({
      ...modalData,
      name: newValue
    }));
  };

  const getUsername = (e: any) => {
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
    <ModalContainer isOpen={modalToggling}>
      <Modal >
        <ModalInputName type="text" value={modalData.name || ''} onChange={(event) => getName(event)} />
        <ModalInputUsername type="text" value={modalData.username || ''} onChange={(event: any) => getUsername(event)} />
        <ModalBlockButton>
          <ModalBlockButtonContainer>
            <ModalButtonClose onClick={() => closeModal()} >Cancel</ModalButtonClose>
          </ModalBlockButtonContainer>
          <ModalBlockButtonContainer>
            <ModalButtonGeneral onClick={() => {
              confirmChange();
              closeModal();
            }}>Save</ModalButtonGeneral>
          </ModalBlockButtonContainer>
        </ModalBlockButton>
      </Modal>
    </ModalContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    modalData: state.reducer.inputValue || [],
    modalToggling: state.reducer.modalToggle
  };
};

const connector = connect(mapStateToProps);
type ModalProps = ConnectedProps<typeof connector>;
export default connector(memo(ModalBlock));