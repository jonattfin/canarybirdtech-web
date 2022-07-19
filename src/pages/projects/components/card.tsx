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

export interface CustomCardProps {
  title: string;
  webUrl: string;
  originalWebUrl: string;
  imageUrl: string;
  githubUrl: string;
  sonarUrl: string;
  sonarImageUrl: string;
  summaryText: string;
  technologies: string[];
}

export function CustomCard(props: CustomCardProps) {
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {props.title[0].toUpperCase()}
          </Avatar>
        }
        title={props.title}
        subheader={
          <a href={props.webUrl} target="_blank" rel="noreferrer">
            {props.webUrl}
          </a>
        }
      />
      <CardMedia component="img" height="194" image={props.imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.summaryText}
          <div>&nbsp;</div>
          <a href={props.originalWebUrl} target="_blank" rel="noreferrer">
            {props.originalWebUrl}
          </a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="small"></GitHubIcon>
          </a>
        </IconButton>
        <a href={props.sonarUrl} target="_blank" rel="noreferrer">
          <img src={props.sonarImageUrl} alt="sonar url"/>
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
              {props.technologies.map((technology) => (
                <li key={`${props.title}_${technology}`}>
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
