import styled from "@emotion/styled";
import { Divider, Stack } from "@mui/material";
import { Bump } from "./components";

export default () => {
  return (
    <div>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Item>
          <h3>
            I'm a software engineer passionate about technology and data
            science.
          </h3>
          <p>
            I have experience in .NET Core (on prem, cloud (Azure)) and
            Javascript (React / Node).
          </p>
          <p>
            My interests are: product development, sustainable software architecture, open source,
            serverless computing, IoT and data science, etc.
          </p>
        </Item>
        <Item>
          <h2>Tech Stack</h2>
          <Bump.CustomBump />
        </Item>
      </Stack>
    </div>
  );
};

const Item = ({ children }: { children: any }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

const ContainerDiv = styled.div`
  text-align: center;
  color: grey;
`;
