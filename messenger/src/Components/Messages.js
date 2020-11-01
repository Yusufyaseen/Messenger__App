import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message.username === username;
  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_useCard" : "message_questCard"}>
        <CardContent>
          <Typography variant="h6" component="h6">
            {!isUser && (
              <span className="sender">
                {message.username ? message.username : "Unknown User"} :
              </span>
            )}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
