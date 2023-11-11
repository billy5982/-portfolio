import React, { useState } from 'react';
import { ButtonProps } from './Test';

const Button = ({
  text,
  onClick = () => {
    return;
  },
  isDisabled,
  hasModal,
  style,
  htmlType,
}: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = useCallback(() => setIsModalOpen(true), []);
  const cancelModal = useCallback(() => setIsModalOpen(false), []);

  const clickEvent = hasModal ? showModal : onClick;

  const modalOnClickEvent = async () => {
    await onClick();
    cancelModal();
  };

  return (
    <>
      {/* 모달이 있을 땐 모달 open 없을 땐 전달된 이벤트 실행*/}
      <AntdBtn htmlType={htmlType} onClick={clickEvent} style={{ ...style }} disabled={isDisabled}>
        {text}
      </AntdBtn>
      {hasModal && (
        <Modal
          title={hasModal.modalTitle}
          style={{ ...hasModal.style }}
          open={isModalOpen}
          onOk={modalOnClickEvent}
          onCancel={cancelModal}
        >
          <p>{hasModal.modalContent}</p>
        </Modal>
      )}
    </>
  );
};
