import { useContext, useState } from "react";

import styles from "./ThemeMode.module.css";

import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import UserContext from "../../context/UserContext";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const ThemeMode = () => {
  const { isDarkMode, setIsDarkMode } = useContext(UserContext);
  const handleChange = (event) => {
    setIsDarkMode(event.target.checked);
  };
  return (
    <div className={styles.ThemeModeContainer}>
      <div className={styles.Icon}>
        <IoSunnyOutline size={20} />
      </div>
      <PinkSwitch
        checked={isDarkMode}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div className={styles.Icon}>
        <GoMoon size={20} />
      </div>
    </div>
  );
};

export default ThemeMode;
