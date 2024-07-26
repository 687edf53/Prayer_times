import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function Prayer({img, name, time}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{width: '19%'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title="صلاة الفجر"
      />

      <CardContent style={{textAlign: 'center'}}>
        <h2 style={{color: '#000', textAlign: 'right'}}>
          {name}
        </h2>
        <Typography style={{color: '#000', fontSize: '5vw', fontWeight: 'bold'}} variant="h1" color="text.secondary">
          {time}
        </Typography>
      </CardContent>  
    </Card>
  );
}
