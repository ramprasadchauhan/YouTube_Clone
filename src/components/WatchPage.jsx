import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";
import CommentContainer from "./CommentContainer";
const WatchPage = () => {
  const [seachParams] = useSearchParams();
  console.log(seachParams.get("v"));
  const para = seachParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="ml-1 flex flex-col w-full">
      <div className="px-4 flex w-full">
        <div>
          <iframe
            width="900"
            height="400"
            src={"https://www.youtube.com/embed/" + para}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
