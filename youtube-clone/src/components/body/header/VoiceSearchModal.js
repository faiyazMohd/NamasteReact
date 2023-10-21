import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrossIcon from "../../../assets/icons/svgs/SvgComponents/CrossIcon";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import MicIcon from "../../../assets/icons/svgs/SvgComponents/MicIcon";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../../utils/store/appSlice";

const VoiceSearchModal = ({
  openVoiceSearchModal,
  setOpenVoiceSearchModal,
}) => {
  const darkTheme = useSelector((store) => store.theme.darkTheme);
  const searchQuery = useSelector((store) => store.app.searchQuery);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(navigate);
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    finalTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    SpeechRecognition.startListening();

    return () => {
      SpeechRecognition.stopListening();
      SpeechRecognition.abortListening();
    };
  }, []);
  useEffect(() => {
    if (finalTranscript.length > 0) {
      navigate("/results?search_query=" + finalTranscript);
      dispatch(setSearchQuery(finalTranscript));
      setOpenVoiceSearchModal(false);
    }
    return () => {};
  }, [finalTranscript]);
  return (
    <>
      <div>
        <div
          onClick={() => setOpenVoiceSearchModal(false)}
          className="fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full bg-[rgba(0,0,0,0.6)]"
        ></div>
      </div>

      <div
        className={`w-full h-full md:w-[560px] md:h-[400px] fixed top-2 left-1/2 -translate-x-1/2   backdrop-blur  shadow-[0px_4px_32px_0px_#0000001a]  ${
          darkTheme
            ? "bg-[#0f0f0f] md:bg-[#212121] text-white"
            : "bg-white text-black"
        }  z-40`}
      >
        <div className="innerContainer w-full h-full m-auto">
          <div className="w-full flex md:justify-end items-center h-14 ">
            <div
              onClick={() => setOpenVoiceSearchModal(false)}
              className={`cursor-pointer ${
                darkTheme
                  ? " hover:bg-[#3a3a3a]  active:bg-[#575656]"
                  : " hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
              } cursor-pointer rounded-full h-11 w-11 flex justify-center items-center mx-3`}
            >
              <CrossIcon color={darkTheme ? "#fff" : "#000"} />
            </div>
          </div>
          {!browserSupportsSpeechRecognition ? (
            <div className="font-medium text-xl mx-6">
              <span>This Browser doesn't support speech recognition.</span>
            </div>
          ) : isMicrophoneAvailable ? (
            <div className=" w-full h-[calc(100%-56px)] flex flex-col justify-between">
              <div className="font-medium text-xl mx-6 line-clamp-6 mt-5 md:mt-0  max-h-[calc(65%)]">
                {transcript.length === 0 && listening
                  ? "Listening..."
                  : transcript}
                {finalTranscript.length === 0 &&
                transcript.length === 0 &&
                !listening
                  ? "Didn't hear that. Try again."
                  : ""}
              </div>
              <div
                className={`w-full flex items-center justify-center  flex-col h-[45%] cursor-pointer ${
                  darkTheme ? "border-[#ffffff1a]" : "border-[#8f89891a]"
                }`}
              >
                <div
                  onClick={() => {
                    if (listening) {
                      SpeechRecognition.stopListening();
                    } else {
                      SpeechRecognition.startListening();
                    }
                  }}
                  className={` rounded-full ${listening ? "animateMic" : ""} `}
                >
                  <div
                    className={` ${
                      darkTheme
                        ? listening
                          ? "bg-[#c00]"
                          : "bg-[#ffffff1a] hover:bg-[#3a3a3a]  active:bg-[#575656]"
                        : listening
                        ? "bg-[#c00]"
                        : "bg-[#0000000d] hover:bg-[#e9e7e7]  active:bg-[#e5e3e3]"
                    } cursor-pointer rounded-full box-content h-16 w-16 flex  items-center justify-center  `}
                  >
                    <MicIcon
                      size={40}
                      color={darkTheme ? "#fff" : listening ? "#fff" : "#000"}
                    />
                  </div>
                </div>
                {finalTranscript.length === 0 && !listening ? (
                  <div
                    className={`mt-2 md:mt-3 ${
                      darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                    } font-medium  text-xs  `}
                  >
                    Tap microphone to try again
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            <div className="">
              <div className="font-medium text-2xl md:text-xl mx-6  mt-5 md:mt-0 ">
                Search with your voice
              </div>
              <div
                className={`mt-3 md:mt-4 ${
                  darkTheme ? "text-[#a4a3a3]" : "text-[#737373]"
                } font-medium  text-xs mx-6 `}
              >
                To search by voice, go to your browser settings and allow access
                to microphone
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VoiceSearchModal;
