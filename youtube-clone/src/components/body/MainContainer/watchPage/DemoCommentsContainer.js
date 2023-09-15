import React from "react";
import ProfileIcon from "../../../../assets/icons/svgs/SvgComponents/ProfileIcon";
import { useSelector } from "react-redux";

const commentsData = [
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [
                  {
                    name: "Faiyaz Mohd",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                    replies: [
                      {
                        name: "Faiyaz Mohd",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                        replies: [],
                      },
                      {
                        name: "Faiyaz Mohd",
                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                        replies: [
                          {
                            name: "Faiyaz Mohd",
                            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                            replies: [
                              {
                                name: "Faiyaz Mohd",
                                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                                replies: [
                                  {
                                    name: "Faiyaz Mohd",
                                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                                    replies: [
                                      {
                                        name: "Faiyaz Mohd",
                                        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                                        replies: [
                                          {
                                            name: "Faiyaz Mohd",
                                            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                                            replies: [],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    name: "Faiyaz Mohd",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                  {
                    name: "Faiyaz Mohd",
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
        ],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
            ],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
        ],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
              {
                name: "Faiyaz Mohd",
                text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
                replies: [],
              },
            ],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
        ],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [],
      },
      {
        name: "Faiyaz Mohd",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
        replies: [
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
          {
            name: "Faiyaz Mohd",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
  {
    name: "Faiyaz Mohd",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  const channelImgUrl =
    "https://yt3.ggpht.com/D8uGTY8fLYo42IK9S_ahqO2u9NAkWEdbAswFM-OcCVNHVmgo0lYx0Pgq6WimdNvxDbw31U-6cA=s88-c-k-c0x00ffffff-no-nd-rj";
  return (
    <div className="flex gap-2  mt-2 rounded-lg shadow-sm">
      <img
        className="w-10 h-10 rounded-full mx-3"
        src={channelImgUrl}
        alt="channelName"
        srcset=""
      />
      <div className="right flex flex-col">
        <span>{name}</span>
        <p>{text}</p>
        
      </div>
    </div>
  );
};

const CommentList = ({ commentsData }) => {
  return commentsData.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className=" ml-5 border-l border-gray-200">
        <CommentList commentsData={comment.replies} />
      </div>
    </div>
  ));
};

const DemoCommentsContainer = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);

  return (
    <div
      className={`${
        darkTheme ? "bg-[#0f0f0f] text-white" : "bg-white text-black"
      } `}
    >
      <h3 className="text-xl">{commentsData.length} Comments</h3>
      <div className="commentsContainer">
        <CommentList commentsData={commentsData} />
      </div>
    </div>
  );
};

export default DemoCommentsContainer;
