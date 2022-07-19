import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/router";

const pages = [
  { text: "Home", link: "/" },
  { text: "Projects", link: "projects" },
  { text: "About me", link: "/about-me" },
];

const ResponsiveAppBar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: any;
}) => {
  const router = useRouter();
  const handleCloseNavMenu = (link: string) => {
    router.push(link);
  };

  return (
    <TopDiv>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <AdbIcon />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseNavMenu(page.link);
                  }}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.text}
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
              href="https://github.com/jonattfin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small"></GitHubIcon>
            </a>
            <ExtraParagraph />
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
