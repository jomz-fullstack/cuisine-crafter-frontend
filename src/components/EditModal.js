import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditModal = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Modal heading</ModalHeader>
        <ModalBody>Woohoo, you are reading this text in a modal!</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button color="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditModal;
