import "./Contacts.css";
import GitHubLogo from "../../assets/social media logos/github_icon.png";
import IGLogo from "../../assets/social media logos/instagram_icon.png";
import LinkedInLogo from "../../assets/social media logos/linkedin_icon.png";
import PhoneNumber from "../../assets/pixelart/svg/phone.svg";
import Mail from "../../assets/pixelart/svg/mail.svg";
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
        </ul>

        <h2>My Fish Keeping Weekly Updates!</h2>
        <h3>May 5th, 2022</h3>
        <p>
          I've had the water running in the 10 gallon tank since last Monday
          when I first moved into my apartment. This week on Monday I decided to
          move the swordtails over to the big tank so they're not getting so
          crowded with the Lampeye's in the 2.5 gallon. It worked well they were
          active and eating the first couple of days, but one of them actually
          started to lose color on Friday which is kind of weird. Still eating,
          swimmig around and everything, will have to keep an eye on it.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
