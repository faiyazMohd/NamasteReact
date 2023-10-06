import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAddressSidebar } from "../utils/store/appSlice";
import SearchArea from "./SearchArea";
import { transform } from "@babel/core";

const AddressSidebar = () => {
  const addressSidebar = useSelector((store) => store.app.addressSidebar);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="modalCloseBtn displayNoneAtPhone"
        style={addressSidebar? {display:"block"}: {display:"none"}}
        onClick={() => dispatch(closeAddressSidebar())}
      ></div>
      <div
        className="addressSidebar"
        style={
          addressSidebar
            ? { transform: "translateX(0%)" }
            : { transform: "translateX(-100%)" }
        }
      >
        <div className="addressSidebarContainer">
          <div
            className=""
            style={{ cursor: "pointer", width: "26px" }}
            onClick={() => {
              dispatch(closeAddressSidebar());
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 12 13"
              fill="none"
              aria-hidden="true"
              strokeColor="rgba(2, 6, 12, 0.92)"
              fillColor="rgba(2, 6, 12, 0.75)"
            >
              <g clip-path="url(#12_svg__clip0_39877_64169)">
                <path
                  d="M1.21396 2.2108C1.56544 1.85933 2.13529 1.85934 2.48675 2.21082L6.00054 5.7247L9.51429 2.21085C9.86576 1.85938 10.4356 1.85937 10.7871 2.21084C11.1386 2.56231 11.1386 3.13215 10.7871 3.48363L7.27332 6.9975L10.7869 10.5112C11.1384 10.8627 11.1384 11.4325 10.7869 11.784C10.4354 12.1354 9.86557 12.1354 9.5141 11.784L6.00054 8.27031L2.48694 11.784C2.13548 12.1355 1.56563 12.1355 1.21415 11.784C0.862675 11.4326 0.862667 10.8627 1.21413 10.5112L4.72776 6.9975L1.21394 3.48359C0.862476 3.13212 0.862484 2.56227 1.21396 2.2108Z"
                  fill="rgba(2, 6, 12, 0.75)"
                  fill-opacity="0.92"
                ></path>
              </g>
              <defs>
                <clipPath id="12_svg__clip0_39877_64169">
                  <rect
                    width="12"
                    height="12"
                    fill="white"
                    transform="translate(0 0.997681)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="" style={{ width: "100%", marginTop: "2rem" }}>
            <SearchArea />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressSidebar;
