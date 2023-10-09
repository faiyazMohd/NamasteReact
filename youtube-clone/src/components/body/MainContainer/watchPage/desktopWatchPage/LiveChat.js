import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SendIcon from "../../../../../assets/icons/svgs/SvgComponents/VideoPage/SendIcon";
import LiveChatMessage from "./LiveChatMessage";
import { addLiveChat, incrementTotalChatsCounts } from "../../../../../utils/store/liveChatSlice";
import { getRandomChatMessages, getRandomFirstName, getRandomLastName } from "../../../../../utils/helper/liveChatHelper";

const LiveChat = () => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [liveToSend, setLiveToSend] = useState("");
  const liveChats = useSelector((store)=>store.liveChat.liveChats)
  const dispatch = useDispatch()

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      dispatch(addLiveChat({
        imageUrl:
          "https://source.unsplash.com/random/200x200?sig=" +
          Math.floor(Math.random() * (1000 - 0 + 1) + 0),
        name: getRandomFirstName()+" "+ getRandomLastName(),
        message: getRandomChatMessages(),
      }))
    }, 1500);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [liveChats]);
  
  return (
    <>
      {showLiveChat ? (
        <>
          <div
            onClick={() => setShowLiveChat(false)}
            className={`chatContainer  text-center w-full  max-w-[392px] h-9 p-4 text-base font-medium flex justify-center items-center m-auto rounded-t-lg cursor-pointer ${
              darkTheme
                ? " bg-[#121212] hover:bg-[#272727]  active:bg-[#3a3a3a] text-white  border border-[#514e4e]"
                : "bg-white hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] text-[#0f0f0f]  border border-[#ccc]"
            } `}
          >
            Hide live chat demo
          </div>
          <div
            className={`chatContainer  text-center w-full  max-w-[392px]  h-[30.05vw] xl:h-[31.77vw] 2xl:h-[33.5vw]  text-base ter m-auto rounded-b-lg cursor-pointer ${
              darkTheme
                ? " bg-[#121212] text-white  border border-[#514e4e]"
                : "bg-white  text-[#0f0f0f]  border border-[#ccc]"
            } `}
          >
            <div className="w-full h-[calc(100%-36px)] overflow-y-auto flex flex-col-reverse">
              {liveChats?.map((chat, index) => {
                return <LiveChatMessage key={index+chat?.name} chat={chat} />;
              })}
            </div>
            <div
              className={`w-full h-9 ${
                darkTheme
                  ? "  border border-[#514e4e]"
                  : "  border border-[#ccc]"
              }   flex`}
            >
              <div className="w-[120px]  h-full flex items-center pl-2 gap-2">
                <img
                  className="rounded-full w-5 h-5"
                  src="https://yt4.ggpht.com/yti/ADpuP3PX89t_wUual52C16XEMrPrSkQI08TrevVBgoZgcw=s64-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
                <span className="text-sm whitespace-nowrap">Faiyaz Mohd</span>
              </div>
              <form
                className="w-[calc(100%-40px-120px)] h-full"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(liveToSend);
                  if (liveToSend.length >0) {
                    dispatch(addLiveChat({
                      imageUrl:
                        "https://yt4.ggpht.com/yti/ADpuP3PX89t_wUual52C16XEMrPrSkQI08TrevVBgoZgcw=s64-c-k-c0x00ffffff-no-rj",
                      name: "Faiyaz Mohd",
                      message: liveToSend,
                    }))
                  }
                  setLiveToSend("");
                }}
              >
                <input
                  className="w-full h-full bg-transparent outline-none border-none"
                  type="text"
                  placeholder="chat..."
                  value={liveToSend}
                  onChange={(e) => setLiveToSend(e.target.value)}
                />
              </form>
              <div
                onClick={() => {
                  console.log(liveToSend);
                  if (liveToSend.length >0) {
                    dispatch(addLiveChat({
                      imageUrl:
                        "https://yt4.ggpht.com/yti/ADpuP3PX89t_wUual52C16XEMrPrSkQI08TrevVBgoZgcw=s64-c-k-c0x00ffffff-no-rj",
                      name: "Faiyaz Mohd",
                      message: liveToSend,
                    }))
                  }
                  setLiveToSend("");
                }}
                className={`w-10 h-full  flex justify-center items-center cursor-pointer  ${
                  darkTheme
                    ? " bg-[#121212] hover:bg-[#272727]  active:bg-[#3a3a3a] text-white  border-l border-[#514e4e]"
                    : "bg-white hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] text-[#0f0f0f]  border-l border-[#ccc]"
                } `}
              >
                <SendIcon color={darkTheme ? "#fff" : "#000"} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          onClick={() => setShowLiveChat(true)}
          className={`chatContainer  text-center w-full  max-w-[392px] h-9 p-4 text-base font-medium flex justify-center items-center m-auto rounded-full cursor-pointer ${
            darkTheme
              ? " bg-[#121212] hover:bg-[#272727]  active:bg-[#3a3a3a] text-white  border border-[#514e4e]"
              : "bg-white hover:bg-[#f2f2f2]  active:bg-[#e5e3e3] text-[#0f0f0f]  border border-[#ccc]"
          } `}
        >
          Show live chat demo
        </div>
      )}
    </>
  );
};

export default LiveChat;
