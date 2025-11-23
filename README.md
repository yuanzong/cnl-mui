# @yuanzong/mui

Custom Material UI helpers for Create & Learn projects. This package bundles a handful of common patterns: confirmation dialogs, responsive modals, lazy-loaded accordions, and a curated timezone picker.

## Installation

```bash
npm install @yuanzong/mui @mui/material @mui/icons-material react react-dom
```

Optionally include the baseline CSS reset if you want the bundled typography and link styles:

```ts
import '@yuanzong/mui/baseline.css';
```

## Components

### ConfirmationModal

A small dialog with cancel/submit actions.

```tsx
import { ConfirmationModal } from '@yuanzong/mui';

function DeleteUserDialog({ open, onClose, onConfirm, loading }: Props) {
  return (
    <ConfirmationModal
      open={open}
      onClose={onClose}
      onSubmit={onConfirm}
      loading={loading}
      submitLabel="Delete"
    >
      Are you sure you want to delete this user?
    </ConfirmationModal>
  );
}
```

Key props:
- `onClose`: closes the dialog
- `onSubmit`: submit action handler
- `loading`: disables the submit button and shows its loading state
- `cancelLabel` / `submitLabel`: override button text
- Accepts other `Dialog` props except `onClose`

### ResponsiveModal

A dialog that automatically switches to full-screen on small viewports.

```tsx
import { ResponsiveModal } from '@yuanzong/mui';

<ResponsiveModal open={open} onClose={handleClose} title="Edit profile">
  {/* modal body */}
</ResponsiveModal>;
```

### LazyLoader

An accordion that triggers a callback when first expanded and shows a loading bar until content is ready.

```tsx
import { LazyLoader } from '@yuanzong/mui';

<LazyLoader
  summary="Show details"
  loading={isFetching}
  onExpanded={fetchData}
  actions={<Button onClick={refresh}>Refresh</Button>}
>
  {content}
</LazyLoader>;
```

Supports select `Accordion` props: `square`, `elevation`, `variant`, and `sx`.

### TimezonePicker

Autocomplete dropdown backed by a curated list of timezones.

```tsx
import { TimezonePicker, zones } from '@yuanzong/mui';

<TimezonePicker
  defaultZone="America/New_York"
  setTimezone={(zone) => console.log(zone.tzCode)}
  label="Timezone"
  fullWidth
/>;
```

Details:
- `defaultZone` defaults to `America/Los_Angeles` when omitted or null
- `setTimezone` receives `{ tzCode, name }`
- Additional `TextField` props like `label`, `placeholder`, `helperText`, etc. are supported
- The `zones` array and `Zone` type are exported if you need to reuse or filter the list

## Scripts

- `npm run build` – build the distributable bundle
- `npm run lint` – lint with Biome
- `npm run typecheck` – TypeScript type check

## License

MIT © Yuanzong Qiu
