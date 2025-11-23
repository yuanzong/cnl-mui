import type { DialogProps } from '@mui/material';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

interface ModalProps extends Omit<DialogProps, 'onClose'> {
  onClose: () => void;
  loading?: boolean;
  onSubmit: () => void;
  cancelLabel?: string;
  submitLabel?: string;
}

export function ConfirmationModal({
  children,
  onClose,
  loading,
  onSubmit,
  cancelLabel,
  submitLabel,
  ...dialogProps
}: ModalProps) {
  return (
    <Dialog maxWidth="sm" {...dialogProps} onClose={onClose}>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelLabel ?? 'Cancel'}</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={onSubmit}
          loading={loading}
        >
          {submitLabel ?? 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
