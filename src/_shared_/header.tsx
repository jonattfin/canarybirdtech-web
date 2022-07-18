import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = ["About me", "Projects"];

const ResponsiveAppBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <TopDiv>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <AdbIcon />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <ButtonGroup variant="text" size="small">
              <Button
                color={theme == "light" ? "success" : "primary"}
                onClick={() => setTheme("light")}
              >
                Light
              </Button>
              <Button
                color={theme == "dark" ? "success" : "primary"}
                onClick={() => setTheme("dark")}
              >
                Dark
              </Button>
            </ButtonGroup>
            <ExtraParagraph />
            <a
              href="https://github.com/jonattfin/simplywallst-clone"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small"></GitHubIcon>
            </a>
            <ExtraParagraph />
            <a
              href="https://sonarcloud.io/summary/new_code?id=jonattfin_simplywallst-clone"
              target="_blank"
              rel="noreferrer"
            >
              <ExtraImage src="https://sonarcloud.io/api/project_badges/measure?project=jonattfin_simplywallst-clone&metric=alert_status" />
            </a>
          </Toolbar>
        </Container>
      </AppBar>
    </TopDiv>
  );
};
export default ResponsiveAppBar;

const TopDiv = styled.div`
  padding: 1vh 0px;
`;

const ExtraImage = styled.img`
  height: 50%;
`;

const ExtraParagraph = styled.p`
  padding: 0px 10px;
`;
