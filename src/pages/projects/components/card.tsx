import * as React from "react";
import { styled as materialStyled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IProject } from "../../../api/interfaces";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = materialStyled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CustomCard({ data }: { data: IProject }) {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {data.title[0].toUpperCase()}
          </Avatar>
        }
        title={data.title}
        subheader={
          <a href={data.webUrl} target="_blank" rel="noreferrer">
            {data.webUrl}
          </a>
        }
      />
      <CardMedia component="img" height="194" image={data.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.summaryText}
          <div>&nbsp;</div>
          <a href={data.originalWebUrl} target="_blank" rel="noreferrer">
            {data.originalWebUrl}
          </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <a href={data.githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="small"></GitHubIcon>
          </a>
        </IconButton>
        <a href={data.sonarUrl} target="_blank" rel="noreferrer">
          <img src={data.sonarImageUrl} alt="sonar url" />
        </a>
        <IconButton></IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2" color="text.secondary">
            Technologies:
          </Typography>
          <Typography paragraph variant="body2" color="text.secondary">
            <ul>
              {data.technologies.map((technology) => (
                <li key={`${data.title}_${technology}`}>
                  <a href={technology} target="_blank" rel="noreferrer">
                    {technology}
                  </a>
                </li>
              ))}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
