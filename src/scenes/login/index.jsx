import { Box, Button, TextField, Typography, useTheme, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { useSnackbar } from "../../contexts/SnackbarContext";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  role: yup.string().required("Role is required"),
});

const initialValues = {
  email: "demoadmin@hennge.com",
  password: "admin",
  role: "Administrator"
};

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { login } = useAuth();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    // Pass the selected role into our mock login
    login(values.email, values.password, values.role);
    showSnackbar(`Welcome! Successfully Authenticated as ${values.role}.`, "success");
    navigate("/");
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh"
      sx={{ background: colors.primary[400] }}
    >
      <Box 
        width="450px" 
        backgroundColor={colors.primary[500]} 
        p="40px" 
        borderRadius="8px" 
        boxShadow="0px 4px 12px rgba(0,0,0,0.4)"
      >
        <Typography variant="h2" fontWeight="bold" color={colors.grey[100]} mb="10px" textAlign="center">
          Secure Portal
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[400]} mb="30px" textAlign="center">
          Sign In to Enterprise Dashboard
        </Typography>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={loginSchema}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Box display="flex" flexDirection="column" gap="20px">
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                
                <FormControl variant="filled" fullWidth>
                  <InputLabel>Access Role</InputLabel>
                  <Select
                    name="role"
                    value={values.role}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!touched.role && !!errors.role}
                  >
                    <MenuItem value="Administrator">Administrator</MenuItem>
                    <MenuItem value="Viewer">Viewer (Restricted)</MenuItem>
                  </Select>
                </FormControl>

                <Button 
                  type="submit" 
                  color="secondary" 
                  variant="contained" 
                  fullWidth
                  sx={{ mt: 2, p: "12px", fontSize: "16px", fontWeight: "bold" }}
                >
                  SECURE LOGIN
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
