import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ShowToastProps {
  type?: ToastType;
  text1?: string;
  text2?: string;
}

export const showToast = ({ type = 'success', text1 = 'Success', text2 = '' }: ShowToastProps) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};
