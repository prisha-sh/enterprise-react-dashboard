import { Box, IconButton, useTheme, Button } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth } from "../../contexts/AuthContext";
import { useSnackbar } from "../../contexts/SnackbarContext";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { logout, user } = useAuth();
  const { showSnackbar } = useSnackbar();
  const { t, i18n } = useTranslation();

  const handleLogout = () => {
    logout();
    showSnackbar("Securely logged out of the dashboard.", "info");
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLang);
    showSnackbar(`Language changed to ${newLang === 'en' ? 'English' : '日本語'}`, "success");
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={toggleLanguage}>
          <TranslateIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <Button 
          onClick={handleLogout} 
          variant="contained" 
          color="warning" 
          sx={{ ml: 2, fontWeight: "bold" }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
