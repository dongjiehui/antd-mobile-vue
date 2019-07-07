import alert from './alert';
import Modal from './modal';
import operation from './operation';
import prompt from './prompt';
import confirm from './confirm';

Modal.alert = alert;
Modal.confirm = confirm;
Modal.prompt = prompt;
Modal.operation = operation;

export default Modal;