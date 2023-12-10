const VideoCard = ({ info }) => {
  //   console.log(info);
  // let { snippet, statistics } = info;
  // let { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-1 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="picture"
      />
      <ul>
        <li>{info?.snippet?.title} </li>
        <li>{info.snippet?.channelTitle} </li>
        <li>{info?.statistics?.viewCount} views </li>
      </ul>
    </div>
  );
};

export default VideoCard;

// import React from "react";

// const VideoCard = ({ info }) => {
//   const { snippet, statistics } = info;
//   const { channelTitle, title, thumbnails } = snippet;

//   return (
//     <div className="p-2 m-2 w-72 shadow-lg">
//       <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
//       <ul>
//         <li className="font-bold py-2">{title}</li>
//         <li>{channelTitle}</li>
//         <li>{statistics.viewCount} views</li>
//       </ul>
//     </div>
//   );
// };

// export const AdVideoCard = ({ info }) => {
//   return (
//     <div className="p-1 m-1 border border-red-900 ">
//       <VideoCard info={info} />
//     </div>
//   );
// };

// export default VideoCard;
