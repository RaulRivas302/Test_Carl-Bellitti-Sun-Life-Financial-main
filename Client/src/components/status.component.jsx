import React from "react";
import { CardHeader, Card, CardContent, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Status(props) {
  const { amazonStatus, googleStatus, allStatus, load } = props;

  //  const dd= new JsonViewer({
  //     container: document.body,
  //     data: testJson,
  //     theme: "light",
  //     expand: false,
  //   });
  const styles = {
    pre: {
      fontFamily: "monospace",
      backgroundColor: "#f5f5f5",
      padding: "10px",
    },
  };

  return (
    <Stack
      flex
      spacing={3}
      direction='row'
      justifyContent='center'
      alignItems='center'
      style={{ minHeight: "100vh" }}
    >
      <Card sx={{ minWidth: 375 }}>
        <CardHeader title='Amazon Status' />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color='text.secondary'
            gutterBottom
            component='pre'
            style={styles.pre}
          >
            {load ? <p>Loading...</p> : JSON.stringify(amazonStatus, null, 2)}
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 375 }}>
        <CardHeader title='Google Status' />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color='text.secondary'
            gutterBottom
            component='pre'
            style={styles.pre}
          >
            {load ? <p>Loading...</p> : JSON.stringify(googleStatus, null, 2)}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 375 }}>
        <CardHeader title='All Status' />
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color='text.secondary'
            gutterBottom
            component='pre'
            style={styles.pre}
          >
            {load ? <p>Loading...</p> : JSON.stringify(allStatus, null, 2)}
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
}
