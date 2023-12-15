/* eslint-disable react/prop-types */
import { userIcon } from "../utils/constant";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img className="h-8" src={userIcon} alt="user-icon" />
      <span className="font-bold ml-2">{name} </span>
      <span className="ml-2">{message} </span>
    </div>
  );
};

export default ChatMessage;
