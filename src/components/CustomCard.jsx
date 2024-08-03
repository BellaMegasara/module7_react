import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// wraps the default MUI Card component to customise it with props
export default function CustomCard({
  title,
  description,
  actionButtonOne, // {label: '', action: () => {}}
  actionButtonTwo, // {label: '', action: () => {}},
  children,
}) {
  //var state

  //function
  const buttonDisplayHandler = (buttonConfig) => {
    if (!buttonConfig?.label) {
      //label: '', action: () => {}}
      return <></>;
    }
    <Button onClick={buttonConfig.action}>{buttonConfig.label}</Button>;
  };

  //return
  return (
    <Card elevation={10} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="iguana"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {buttonDisplayHandler()}
        {buttonDisplayHandler()}
        {/* button one function call with param of "actionButtonone"} */}
        <Button size="small" color="primary">
          {buttonLabel}
        </Button>
        <Button size="small" color="primary">
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  );
}
// ++ Add support for a button text prop as well, test rendering it
