import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <footer id="footer">
      <Typography variant="h4" color='#3f1309'>follow us on social media</Typography>
      <Stack direction="row" gap={3}>
        <IconButton>
          <TwitterIcon color="primary" />
        </IconButton>
        <IconButton>
          <FacebookIcon sx={{ color: "primary.dark" }} />
        </IconButton>
        <IconButton>
          <InstagramIcon color="error" fill="error" />{" "}
        </IconButton>
        <IconButton>
          <YouTubeIcon color="error" />{" "}
        </IconButton>
      </Stack>
    </footer>
  );
};

export default Footer;
