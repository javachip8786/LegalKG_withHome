import { Button } from "@mui/material";
import styles from "./Desktop2.module.css";
import { useNavigate } from 'react-router-dom';


const Desktop2 = () => {
    const navigate = useNavigate();
    return (<>
    <Button
        className={styles.rectangleButton}
        sx={{ width: 1542 }}
        variant="outlined"
      />
      <Button
        className={styles.rectangleButton1}
        sx={{ width: 251 }}
        variant="contained"
        color="primary"
      >{`NEW LEGISLATION `}</Button>
      <Button
        className={styles.rectangleButton2}
        sx={{ width: 249 }}
        variant="contained"
        color="primary"
        onClick={() => {
          navigate('/Intermediate');
        }}
      >{`BROWSE LEGISLATION `}</Button>
      <Button
        className={styles.rectangleButton3}
        sx={{ width: 250 }}
        variant="contained"
        color="primary"
      >{`CHANGES TO LEGISLATION `}</Button>
      <Button
        className={styles.rectangleButton4}
        sx={{ width: 74.921875 }}
        variant="contained"
        color="primary"
        onClick={() => {
            navigate('/');
          }}
      >
        HOME
      </Button>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.screenshot20221201At1123}
        alt=""
        src="../screenshot-20221201-at-1123-1@2x.png"
      />
      <div className={styles.legislationgovinDiv}>Legislation.gov.in</div>
      <img
        className={styles.screenshot20221201At1157}
        alt=""
        src="../screenshot-20221201-at-1157-1@2x.png"
      />
    </>
    );
};

export default Desktop2;