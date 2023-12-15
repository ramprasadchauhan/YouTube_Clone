/* eslint-disable react/prop-types */
import { userIcon } from "../utils/constant";

const CommentContainer = () => {
  const commentData = [
    {
      name: "Ramprasad Chauhan",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
      replies: [
        {
          name: "Ramprasad Chauhan",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
          replies: [
            {
              name: "Ramprasad Chauhan",
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
              replies: [
                {
                  name: "Ramprasad Chauhan",
                  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
                  replies: [],
                },
                {
                  name: "Ramprasad Chauhan",
                  text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
                  replies: [
                    {
                      name: "Ramprasad Chauhan",
                      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
                      replies: [],
                    },
                  ],
                },
              ],
            },
            {
              name: "Ramprasad Chauhan",
              text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Ramprasad Chauhan",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
      replies: [
        {
          name: "Ramprasad Chauhan",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
          replies: [],
        },
      ],
    },
    {
      name: "Ramprasad Chauhan",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
      replies: [],
    },
    {
      name: "Ramprasad Chauhan",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi.",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text } = data;
    return (
      <div className="flex bg-gray-100 shadow-lg py-2 m-2">
        <img className="h-8 inline" src={userIcon} alt="user" />
        <div className="px-3">
          <p className="font-bold">{name} </p>
          <p>{text} </p>
        </div>
      </div>
    );
  };

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => {
      return (
        <div key={index}>
          <Comment data={comment} />
          <div key={index} className="px-4 border border-l-black">
            <CommentList comments={comment.replies} />
            {/* <Comment key={index} data={comment} />
            <Comment key={index} data={comment} />
            <Comment key={index} data={comment} /> */}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="m-3">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
