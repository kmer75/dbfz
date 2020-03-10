import React from "react";
// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";

class Modals extends React.Component {
  state = {
    exampleModal: false
  };
  toggleModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        {/* Modal */}
        <Modal
          className="modal-dialog-centered"
          // isOpen={this.state.exampleModal}
          isOpen={this.props.modalConfig.isOpen}
          toggle={() => this.toggleModal("exampleModal")}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {this.props.modalConfig.title}
            </h5>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal()}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className={this.props.modalConfig.textColor + " modal-body"}>{this.props.modalConfig.text}</div>
          <div className="modal-footer">
            <Button
              color="primary"
              data-dismiss="modal"
              type="button"
              onClick={() => this.toggleModal("exampleModal")}
            >
              OK
            </Button>
            {/* <Button color="primary" type="button">
              Save changes
            </Button> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default Modals;