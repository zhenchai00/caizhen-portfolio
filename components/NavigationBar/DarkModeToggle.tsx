import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface Props {
    className?: string;
}

const DarkModeToggle = ({ className }: Props) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkModeInLocalStorage = "darkMode" in window.localStorage;

        const darkModeFromLocalStorage = isDarkModeInLocalStorage
            ? window.localStorage.getItem("darkMode") === "true"
            : window.matchMedia("(prefers-color-scheme: dark)").matches;

        setDarkMode(darkModeFromLocalStorage);
    }, []);

    const onToggleDarkMode = () => {
        setDarkMode(!darkMode);
        console.log("onToggleDarkMode", darkMode);
        if (darkMode) {
            document.querySelector("html")?.classList.remove("dark");
        } else {
            document.querySelector("html")?.classList.add("dark");
        }
        window.localStorage.setItem("darkMode", (!darkMode).toString());
    };

    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={onToggleDarkMode}
            color="inherit"
            className={`${className}`}
        >
            {!darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
    );
};

export default DarkModeToggle;
