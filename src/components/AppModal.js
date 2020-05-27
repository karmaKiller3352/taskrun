import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { hideModal } from '../redux/actions';

const mapDispatchtoProps = {
  hideModal,
};
const mapStatetoProps = (state) => {
  return {
    title: state.modal.title,
    InnerComponent: state.modal.component,
    show: state.modal.show,
  };
};

function AppModal({ title, InnerComponent, show, hideModal }) {
  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InnerComponent />
      </Modal.Body>
    </Modal>
  );
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AppModal);
