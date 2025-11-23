import { Close } from '@mui/icons-material';
import type { DialogProps } from '@mui/material';
import { Dialog, DialogTitle, IconButton, useMediaQuery } from '@mui/material';

interface ModalProps extends Omit<DialogProps, 'onClose'> {
  title?: string;
  onClose: () => void;
}

export function ResponsiveModal({
  title,
  onClose,
  children,
  ...dialogProps
}: ModalProps) {
  const fullScreen = useMediaQuery('(max-width:600px)');

  return (
    <Dialog
      scroll={'body'}
      fullScreen={fullScreen}
      maxWidth={'md'}
      fullWidth={true}
      {...dialogProps}
      onClose={onClose}
    >
      <IconButton
        onClick={onClose}
        style={{ position: 'absolute', right: 12, top: 8 }}
        size="large"
      >
        <Close />
      </IconButton>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  );
}
