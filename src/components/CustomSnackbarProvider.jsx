import { SnackbarProvider } from 'notistack';
import React from 'react';

const CustomSnackbar = React.forwardRef(function CustomSnackbar(props, ref) {
  const { message, ...other } = props;

  return (
    <div
      ref={ref}
      {...other}
      style={{
        textAlign: 'center',
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-button-text)',
        padding: '12px 16px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 500,
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      }}
    >
      {message}
    </div>
  );
});

const CustomSnackbarProvider = ({ children }) => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={3000}
      Components={{
        default: CustomSnackbar,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default CustomSnackbarProvider;
