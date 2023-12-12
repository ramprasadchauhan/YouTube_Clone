import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "./helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      //   console.log("Api Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "🚀",
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border bg-slate-100 flex flex-col-reverse rounded-lg border-black w-full h-[400px] overflow-y-scroll">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submit", liveMessage);
          dispatch(
            addMessage({
              name: "Ramprasad",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-[300px] rounded-lg p-3 h-10 px-2"
          type="text"
          placeholder="Enter message"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="m-2 py-2 px-4 bg-green-400 rounded-lg font-bold">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
