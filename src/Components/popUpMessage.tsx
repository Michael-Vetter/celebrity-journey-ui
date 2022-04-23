import { Modal, Button, Form } from "react-bootstrap";

export default function PopUpMessage(props) {
  const handleClose = () => {
    props.setShowFlag(false);
    props.callback();
  };

  return (
    <>
      <div>
        <Modal show={props.showFlag} onHide={handleClose} scrollable={true}>
          <Modal.Header>
            <Modal.Title>{props.message}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Button className="m-2" variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
