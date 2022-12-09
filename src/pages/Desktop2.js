import { Button } from "@mui/material";
import styles from "./Desktop2.module.css";
import { useNavigate } from 'react-router-dom';
import Header from './Header.js';

const Desktop2 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.desktop2}>
      <Header/>
      <div className={styles.legislationgovinDiv}>Legislation.gov.in</div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <Button
        className={styles.rectangleButton5}
        sx={{ width: 159.4765625 }}
        variant="contained"
        color="primary"
      >
        WELCOME
      </Button>
      <Button
        className={styles.rectangleButton6}
        sx={{ width: 158.40625 }}
        variant="contained"
        color="primary"
      >
        DELHI
      </Button>
      <Button
        className={styles.rectangleButton7}
        sx={{ width: 158.40625 }}
        variant="contained"
        color="primary"
      >
        MUMBAI
      </Button>
      <Button
        className={styles.rectangleButton8}
        sx={{ width: 158.40625 }}
        variant="contained"
        color="primary"
      >
        CHENNAI
      </Button>
      <Button
        className={styles.rectangleButton9}
        sx={{ width: 158.40625 }}
        variant="contained"
        color="primary"
      >
        KOLKATA
      </Button>
      <div className={styles.rectangleDiv4} />
      <b className={styles.newLegislationB}>New Legislation</b>
      <div className={styles.stayUpToDateWithNewlyEna}>
        <p
          className={styles.stayUpTo}
        >{`Stay up to date with newly enacted legislation for the UK, Scotland, Wales and Northern Ireland as it is published to this site using our free subscription feeds, or by browsing new legislation by publication date. All Bills currently before the UK Parliament are listed on the UK Parliament website in the Parliamentary Business, Bills & Legislation section.`}</p>
      </div>
      <div className={styles.rectangleDiv5} />
      <b className={styles.findingYourWayAroundLegisl}>
        <p className={styles.stayUpTo}>
          Finding your way around legislation.gov.in
        </p>
      </b>
      <div className={styles.legislationgovukCarriesMos}>
        <p className={styles.stayUpTo}>
          Legislation.gov.uk carries most (but not all) types of legislation and
          their accompanying explanatory documents. You can read about what
          legislation we publish, how we apply amendments, what legislation we
          update, where you can obtain copies of legislation we don’t hold and
          how legislation works. To find an item of legislation you can browse
          by legislation type and category or use our advanced search to explore
          by title or keyword .
        </p>
        <p className={styles.blankLineP}>&nbsp;</p>
      </div>
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <b className={styles.understandingLegislationB}>
        <p className={styles.stayUpTo}>Understanding Legislation</p>
      </b>
      <img
        className={styles.iconsaxLinearfacebook}
        alt=""
        src="../iconsaxlinearfacebook.svg"
      />
      <img
        className={styles.iconsaxLineargoogle}
        alt=""
        src="../iconsaxlineargoogle.svg"
      />
      <button className={styles.iconsaxLinearinstagramButton}>
        <img className={styles.vectorIcon} alt="" />
        <img className={styles.vectorIcon1} alt="" />
        <img className={styles.vectorIcon2} alt="" />
      </button>
      <img
        className={styles.iconsaxLinearwhatsapp}
        alt=""
        src="../iconsaxlinearwhatsapp.svg"
      />
      <div className={styles.copyrightAllRightsReserved}>
        @Copyright All rights reserved
      </div>
      <img
        className={styles.screenshot20221201At1155}
        alt=""
        src="../screenshot-20221201-at-1155-1@2x.png"
      />
      
      <div className={styles.howLegislationWorksHowParl}>
        <p className={styles.stayUpTo}>How legislation works</p>
        <p className={styles.stayUpTo}>
          How parliaments have changed over time and created different
          legislation types
        </p>
        <p className={styles.stayUpTo}>How legislation is numbered and cited</p>
        <p className={styles.stayUpTo}>
          How legislation can extend and apply to different parts of the UK
        </p>
        <p className={styles.stayUpTo}>How legislation comes into force</p>
        <p className={styles.stayUpTo}>
          Our editorial practice and timescales for incorporating changes
        </p>
        <p className={styles.blankLineP}>&nbsp;</p>
      </div>
    </div>
  );
};

export default Desktop2;
