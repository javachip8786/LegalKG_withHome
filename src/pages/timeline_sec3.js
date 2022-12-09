import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import ArticleIcon from '@mui/icons-material/Article';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Header from './Header.js'

const EXAMPLE = [
  {
    data: "2005-07-17",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property shall be guilty of offence of money-laundering.",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
    text11: ""
  },
  {
    data: "2013-02-15",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime including its concealment, possession,acquisition and projecting it as untainted property shall be guilty of offence of money laundering.",
    text7: "",
    text8: "",
    text9: "",
    text10: "",
    text11: ""
  },
  {
    data: "2019-08-01",
    text1: "",
    text2: "",
    text3: "",
    text4: "",
    text5: "",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime including its concealment, possession,acquisition and projecting it as untainted property shall be guilty of offence of money laundering.",
    text7: "",
    text8: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime  and projecting it as untainted property shall be guilty of offence of money laundering.",
    text9: "EXPLANATORY MEMORANDUM",
    text10: "(i) For the removal of doubts, it is hereby clarified that,- a person shall be guilty of offence of moneylaundering if such person is found to have directly or indirectly attempted to indulge or knowingly assisted or knowingly is a party or is actually involved in one or more of the following processes or activities connected with proceeds of crime, namely - ",
    text11: ['concealment', 'possession', 'acquisition', 'use', 'projecting as untainted property', 'claiming as untainted property, in any manner whatsoever'],
    text12: "(ii) the process or activity connected with proceeds of crime is a continuing activity and continues till such time a person is directly or\n                                            indirectly enjoying the proceeds of\n                                            crime by its concealment or\n                                            possession or acquisition or use or\n                                            projecting it as untainted property or\n                                            claiming it as untainted property in any manner whatsoever."
  }
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <ArticleIcon />,
    2: <ArticleIcon />,
    3: <ArticleIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const Timeline_sec3 = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [previous, setPrevious] = useState(-1);
  const [curStatus, setCurStatus] = useState("");
  useEffect(() => {
    setCurStatus(EXAMPLE[curIndex]);
  }, [curIndex, previous])

  return (
      <>
      <Header/>
      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', position: 'absolute', top:'41%', left: '10%'}}>
         <Box sx={{ width: '100%' }} style={{'margin': '2%'}}>
          <Stepper alternativeLabel activeStep={curIndex} connector={<ColorlibConnector />}>
            {EXAMPLE.map((label, idx) => (
              <Step key={idx} onClick={() => {
                setPrevious(curIndex);
                setCurIndex(idx);
              }}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label.data}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div style={{'background': '#eee', 'width': '80vw', 'padding':'0% 2% 2% 2%'}}>
          <div className='text-center'>
            <h3>{curStatus.text1}</h3>
          </div>
          <div className='text-center'>
            {curStatus.text2}
          </div>
          <div className='text-center'>
            {curStatus.text3}
          </div>
          <br/>
          <div className='text-center'>
            <h3 style={{'margin': '0px'}}>{curStatus.text4}</h3>
          </div>
          <br/>
          <div className='text-center'>
            <h4 style={{'margin': '0px'}}>{curStatus.text5}</h4>
          </div>
          <div className='text-center'>
            {curStatus.text6}
          </div>
          <br/>
          <div className='text-center'>
            <h4 style={{'margin': '0px'}}>{curStatus.text7}</h4>
          </div>
          <div className='text-center'>
            {curStatus.text8}
          </div>
          <br/>
          <div className='text-center'>
            <h4 style={{'margin': '0px'}}>{curStatus.text9}</h4>
          </div>
          <div className='text-center'>
            {curStatus.text10}
          </div>
          <div className='text-left'>
            {curStatus.text11 && curStatus.text11.map((item) => {
              return (<div>{item}</div>)
            })}            
          </div>
          <div className='text-center'>
            {curStatus.text12}
          </div>
        </div>
      </div>
      </>
    );
}


export default Timeline_sec3;