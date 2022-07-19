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
