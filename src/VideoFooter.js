import React from "react";
import "./VideoFooter.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Ticker from "react-ticker";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} • <Button variant="text">Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon />
          <ChatBubbleIcon />
          <SendIcon />
          <MoreHorizIcon />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__actionsRightStat">
            <FavoriteIcon />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__actionsRightStat">
            <ChatBubbleIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
