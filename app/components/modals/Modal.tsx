"use client";

import React from "react";
import { GrClose } from "react-icons/gr";
import Button from "../buttons/Button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  btnLabel: string;
  title: string;
  bodyElement?: React.ReactElement;
  footerElement?: React.ReactElement;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  btnLabel,
  title,
  bodyElement,
  footerElement,
}) => {
  const closeFunc = () => {
    onClose();
  };

  const submitFunc = () => {
    onSubmit();
  };

  return (
    <div className="bg-black bg-opacity-70 fixed flex items-center justify-center w-full h-full">
      <div className="bg-white rounded-lg w-1/2 p-5">
        <div className="flex items-center justify-between">
          <div>{title}</div>
          <div onClick={closeFunc}>
    
            <GrClose size={25} className="cursor-pointer" />
          </div>
        </div>
<div>{bodyElement}</div>
        <Button
        btnLabel={btnLabel}
        onSubmit={submitFunc}
        />
      </div>
    </div>
  );
};

export default Modal;
