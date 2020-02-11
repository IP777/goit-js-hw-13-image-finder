import PNotify from 'pnotify/dist/es/PNotify';
import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyButtons';

const alert = {
  pError(title = 'Oh No!', text = 'Something terrible happened.') {
    PNotify.error({
      title: `${title}`,
      text: `${text}`,
    });
  },
  pSuccess(
    title = 'Success!',
    text = 'That thing that you were trying to do worked.',
  ) {
    PNotify.success({
      title: `${title}`,
      text: `${text}`,
    });
  },
  pInfo(
    title = 'New Thing',
    text = 'Just to let you know, something happened.',
  ) {
    PNotify.info({
      title: `${title}`,
      text: `${text}`,
    });
  },
};

export default alert;
