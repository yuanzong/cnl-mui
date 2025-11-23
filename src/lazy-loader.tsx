import { ExpandMore } from '@mui/icons-material';
import type { AccordionProps } from '@mui/material';
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  LinearProgress,
} from '@mui/material';
import type * as React from 'react';

interface LazyLoaderProps
  extends Pick<AccordionProps, 'square' | 'elevation' | 'variant' | 'sx'> {
  summary: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  loading: boolean;
  onExpanded: () => void;
}

export function LazyLoader({
  actions,
  summary,
  loading,
  onExpanded,
  children,
  ...props
}: LazyLoaderProps) {
  return (
    <Accordion
      {...props}
      slotProps={{ transition: { unmountOnExit: true } }}
      onChange={(_, expanded) => {
        if (expanded) {
          onExpanded();
        }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>{summary}</AccordionSummary>
      <AccordionDetails style={{ display: 'block' }}>
        {loading ? <LinearProgress /> : children}
      </AccordionDetails>
      {actions && <AccordionActions>{actions}</AccordionActions>}
    </Accordion>
  );
}
