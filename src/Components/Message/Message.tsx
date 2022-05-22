import React, { ReactElement } from "react";
import "./style.scss";

interface IMessageProps {
  icon: ReactElement;
  message: string;
}

const Message = ({ icon, message }: IMessageProps) => {
  return (
    <div className="message">
      {icon}
      <p>{message}</p>
    </div>
  );
};

export default Message;
