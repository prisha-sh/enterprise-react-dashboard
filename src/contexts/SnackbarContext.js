import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success"); // success, error, warning, info

  const showSnackbar = (msg, sev = "success") => {
    setMessage(msg);
    setSeverity(sev);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar 
        open={open} 
        autoHideDuration={4000} 
        onClose={handleClose} 
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%", fontSize: "16px", fontWeight: "bold" }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
