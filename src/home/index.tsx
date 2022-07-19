import { Skeleton, Stack } from "@mui/material";
import { Fragment } from "react";

export default function Blog() {
  return (
    <Fragment>
      <Stack direction="row" spacing={10}>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
      </Stack>
      <Stack direction="row" spacing={10}>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
      </Stack>
      <Stack direction="row" spacing={10}>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
        <div>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
        </div>
      </Stack>
    </Fragment>
  );
}
