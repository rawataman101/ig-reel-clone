import React from "react";
import "./VideoHeader.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
function VideoHeader() {
  return (
    <div className="videoHeader">
      <ChevronLeftIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
