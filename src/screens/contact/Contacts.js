import "./Contacts.css";
import GitHubLogo from "../../assets/social media logos/github_icon.png";
import IGLogo from "../../assets/social media logos/instagram_icon.png";
import LinkedInLogo from "../../assets/social media logos/linkedin_icon.png";
import PhoneNumber from "../../assets/pixelart/svg/phone.svg";
import Mail from "../../assets/pixelart/svg/mail.svg";
import Location from "../../assets/pixelart/svg/location.svg";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

const LinkedinProfileLink =
  "https://www.linkedin.com/in/anderson-hsieh-6003a41ba/";
const IGProfileLink = "https://www.instagram.com/anderson_hsieh0330/";
const GithubProfilLink = "https://github.com/AndersonHsieh0330";

const Contacts = () => {
  const [isCopied, setIsCopied] = useState(false);

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div id="ContactsContainer">
      <span id="CopiedMessage">{isCopied ? "Copied!" : ""}</span>
      <div id="ContactsLeftContainer">
        <h2>有特色的人</h2>
        <p>
          這個網站的用意, 一方面是讓我練習網頁開發 ( CSS 有夠難弄 ),
          一方面也是讓我整理照片時, 一邊回想充滿各種心情的回憶.
          我認為做有特色的人, 比什麼都重要. 希望看到這頁時你也已經看完前面幾頁,
          且在腦海裡對我留下一點印象. 如果沒有的話, 就來找我聊聊天吧!
          <br />
          <br />
          Hopefully I've left an impression of myself in your mind by now. Here
          are some ways to reach me, welcome to my life :)
        </p>
        <div id="Contacts_Dividor_1"></div>
      </div>
      <ul id="ContactsList">
        <li>
          <div className="ContactsItem">
            <a href={GithubProfilLink} target="_blank" download>
              <img src={GitHubLogo} />
            </a>
            <p>github.com/AndersonHsieh0330</p>
          </div>
        </li>
        <li>
          <div className="ContactsItem">
            <a href={IGProfileLink} target="_blank" download>
              <img src={IGLogo} />
            </a>
            <p>instagram.com/anderson_hsieh0330</p>
          </div>
        </li>
        <li>
          <div className="ContactsItem">
            <a href={LinkedinProfileLink} target="_blank" download>
              <img src={LinkedInLogo} />
            </a>
            <p>linkedin.com/in/anderson-hsieh-6003a41ba</p>
          </div>
        </li>
        <li>
          <CopyToClipboard text="h2hsieh@uwaterloo.ca" onCopy={onCopyText}>
            <div className="ContactsItem">
              <img src={Mail} />
              <p>h2hsieh@uwaterloo.ca</p>
            </div>
          </CopyToClipboard>
        </li>

        <li>
          <CopyToClipboard text="12262014836" onCopy={onCopyText}>
            <div className="ContactsItem">
              <img src={PhoneNumber} />
              <p>(+1) 226-201-4836</p>
            </div>
          </CopyToClipboard>
        </li>
        <li>
          <div className="ContactsItem">
            <img src={Location} />
            <p>Waterloo, ON. Canada</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
