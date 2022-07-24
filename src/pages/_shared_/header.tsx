import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack, Switch } from "@mui/material";
import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useRouter } from "next/router";

const pages = [
  { text: "Projects", link: "/" },
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
            <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
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
            <Stack direction="row" spacing={1} alignItems="center">
              <Switch
                checked={theme == 'dark'}
                onChange={() => {theme == 'dark' ? setTheme('light'): setTheme('dark')}}
                inputProps={{ "aria-label": "controlled" }}
              />
              <a href={"https://sonarcloud.io/project/information?id=jonattfin_canarybirdtech-web"} target="_blank" rel="noreferrer">
                <img src={"https://sonarcloud.io/api/project_badges/measure?project=jonattfin_canarybirdtech-web&metric=alert_status"} alt="sonar url" />
              </a>
            </Stack>
            <ExtraParagraph />
            <a
              href="https://github.com/jonattfin"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="small" />
            </a>
            <ExtraParagraph />
            <a
              href="https://www.linkedin.com/in/catalin-andrei-57936032"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="small" />
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

const ExtraParagraph = styled.p`
  padding: 0px 10px;
`;
