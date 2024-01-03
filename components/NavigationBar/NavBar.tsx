"use client";

import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NavItem from "./NavItem";
import Link from "next/link";

interface Props {
    window?: () => Window;
}

const drawerWidth = 240;
const MENU_ITEMS = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const NavBar = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container =
        window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className="min-h-screen">
            <div>
                {MENU_ITEMS.map((item, idx) => (
                    <NavItem
                        key={idx}
                        href={item.href}
                        name={item.name}
                        className="flex p-4 align-center justify-center text-xl"
                    />
                ))}
            </div>
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                component="nav"
                sx={{ backgroundColor: "#365486" }}
            >
                <Toolbar className="flex justify-between items-center">
                    <Link href={"/"}>
                        <Typography
                            variant="h6"
                            sx={{ my: 2, fontFamily: "inherit" }}
                        >
                            Cai Zhen
                        </Typography>
                    </Link>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {MENU_ITEMS.map((item, idx) => (
                            <NavItem
                                key={idx}
                                href={item.href}
                                name={item.name}
                                className="justify-between mx-3"
                            />
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        backgroundColor: "#365486",
                        color: "#fff",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default NavBar;
