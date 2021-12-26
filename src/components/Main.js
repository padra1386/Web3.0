import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useEffect, useState } from "react";

const Main = ({ selectedPunk, punkListData }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={punkListData[selectedPunk].image_original_url}
              className="activePunk"
            />
          </div>
        </div>

        <div className="punkDetails">
          <div className="title">
            {punkListData[selectedPunk].name}
            <span className="itemNumber">
              {" "}
              #{punkListData[selectedPunk].token_id}{" "}
            </span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={punkListData[selectedPunk].owner.profile_img_url}
                className="ownerImage"
              />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div className="ownerAdress">
                  {punkListData[selectedPunk].owner.address}
                </div>
                <div href="#" className="ownerHandle">
                  @padraahani
                </div>
              </div>
              <div className="ownerLinkContainer">
                <div className="ownerLink">
                  <img className="ownerLinkImage" src={instagramLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img className="ownerLinkImage" src={twitterLogo} alt="" />
                </div>
                <div className="ownerLink">
                  <img className="ownerLinkImage" src={moreIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
