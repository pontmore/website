"use client";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

const navItems = [
  ["Protocol", "#protocol"],
  ["Build", "#build"],
  ["Start", "#start"],
];

export function SiteHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function closeMenu() {
    setAnchorEl(null);
  }

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{
            gap: 2,
            minHeight: 76,
          }}
        >
          <Link
            href="#top"
            underline="none"
            color="text.primary"
            sx={{
              alignItems: "center",
              display: "inline-flex",
              flexShrink: 0,
              gap: 1.25,
              fontWeight: 800,
            }}
          >
            <Box
              component="img"
              src="/logo.svg"
              alt=""
              sx={{
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                height: 38,
                objectFit: "contain",
                p: 0.5,
                width: 38,
              }}
            />
            Pontmore
          </Link>

          <Stack
            component="nav"
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", sm: "flex" }, ml: "auto" }}
          >
            {navItems.map(([label, href]) => (
              <Button key={href} component="a" href={href} color="inherit" size="small">
                {label}
              </Button>
            ))}
          </Stack>

          <IconButton
            aria-controls={open ? "section-navigation" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            aria-label="Open section navigation"
            color="inherit"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{ display: { xs: "inline-flex", sm: "none" }, ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="section-navigation"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
          >
            {navItems.map(([label, href]) => (
              <MenuItem key={href} component="a" href={href} onClick={closeMenu}>
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
