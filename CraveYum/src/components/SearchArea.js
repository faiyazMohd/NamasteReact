import { useEffect, useState } from "react";
import locationIcon from "../assets/icons/svgs/locationIcon.svg";
import { useDispatch } from "react-redux";
import { closeAddressSidebar, moddifyPlaceId } from "../utils/store/appSlice";
import { Link } from "react-router-dom";
const SearchArea = () => {
  const [searchInput, setSearchInput] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchInput]);
  const getSuggestions = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/misc/place-autocomplete?input=" +
        searchInput
    );
    const json = await data.json();
    setAddressSuggestions(json?.data);
    console.log(json);
  };
  return (
    <div style={{ width: "100%" }}>
      <div className="AddressSearchBar">
        <input
          type="text"
          autofocus
          className="addSearchInput"
          placeholder="Search for area, street name.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {searchInput.length === 0 ? (
          ""
        ) : (
          <div
            className="cancelBtn"
            onClick={() => setSearchInput("")}
            style={{ color: "#fc8019" }}
          >
            Clear
          </div>
        )}
      </div>
      {addressSuggestions?.map((address) => {
        return (
          <Link to="/">
            <div
              className="addressSuggestionContainer"
              onClick={() => {
                dispatch(moddifyPlaceId(address?.place_id));
                dispatch(closeAddressSidebar());
                setSearchInput("");
              }}
              key={address?.place_id}
            >
              <div className="addSuggestionLeft">
                <img src={locationIcon} alt="" />
              </div>
              <div className="addSuggestionRight">
                <div className="mainTextSuggestion">
                  {address?.structured_formatting?.main_text}
                </div>
                <div className="secondaryText">
                  {address?.structured_formatting?.secondary_text}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchArea;
