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

const EXAMPLE = [
  {
    data: "2003-01-17",
    text1: "Preamble",
    text2: "An Act to prevent money-laundering and to provide for confiscation of property derived from, or involved in, money-laundering and for matters connected therewith or incidental thereto. WHEREAS the Political Declaration and Global Programme of Action, annexed to the resolution S-17/2 was adopted by the General Assembly of the United Nations at its seventeenth special session on the twenty-third day of February, 1990; AND WHEREAS the Political Declaration adopted by the Special Session of the United Nations General Assembly held on 8th to 10th June, 1998 calls upon the Member States to adopt national money-laundering legislation and programme; AND WHEREAS it is considered necessary to implement the aforesaid resolution and the Declaration.",
    text3: "ENACTED by Parliament in the Fifty-third Year of the Republic of India as follows:-",
    text4: "Chapter II - OFFENCE OF MONEY-LAUNDERING",
    text5: "sct3-par001",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property shall be guilty of offence of money-laundering.",
    text7: "sct4-par001",
    text8: "Whoever commits the offence of money-laundering shall be punishable with rigorous imprisonment for a term which shall not be less than three years but which may extend to seven years and shall also be liable to fine which may extend to five lakh rupees:",
    text9: "sct4-par002",
    text10: "Provided that where the proceeds of crime involved in money-laundering relates to any offence specified under paragraph 2 of Part A of the Schedule, the provisions of this section shall have effect as if for the words \"which may extend to seven years\", the words \"which may extend to ten years\" had been substituted.",
    text11: ""
  },
  {
    data: "2013-01-03",
    text1: "Preamble",
    text2: "An Act further to amend the Prevention of Money-laundering Act, 2002.",
    text3: "ENACTED by Parliament in the Sixty-third Year of the Republic of India as follows:-",
    text4: "Prevention of Money Laundering (Amendment) Act, 2012",
    text5: "Initial Version",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property shall be guilty of offence of money laundering.",
    text7: "New Version",
    text8: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime  and projecting it as untainted property shall be guilty of offence of money laundering.",
    text9: "",
    text10: "",
    text11: ""
  },
  {
    data: "2019-08-01",
    text1: "Preamble",
    text2: "An Act to give effect to the financial proposals of the Central Government for the financial year 2019-2020.",
    text3: "ENACTED by Parliament in the Seventieth Year of the Republic of India as follows:-",
    text4: "Prevention of Money Laundering (Amendment) Act, 2012",
    text5: "Initial Version",
    text6: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime and projecting it as untainted property shall be guilty of offence of money laundering.",
    text7: "New Version",
    text8: "Whosoever directly or indirectly attempts to indulge or knowingly assists or knowingly is a party or is actually involved in any process or activity connected with the proceeds of crime  and projecting it as untainted property shall be guilty of offence of money laundering.",
    text9: "EXPLANATORY MEMORANDUM",
    text10: "For the removal of doubts, it is hereby clarified that,- a person shall be guilty of offence of moneylaundering if such person is found to have directly or indirectly attempted to indulge or knowingly assisted or knowingly is a party or is actually involved in one or more of the following processes or activities connected with proceeds of crime, namely - ",
    text11: ['concealment', 'possession', 'acquisition', 'use', 'projecting as untainted property', 'claiming as untainted property, in any manner whatsoever']
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

const Timeline = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [previous, setPrevious] = useState(-1);
  const [curStatus, setCurStatus] = useState("");
  useEffect(() => {
    setCurStatus(EXAMPLE[curIndex]);
  }, [curIndex, previous])

  return (
      <div style={{'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center'}}>
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
        </div>
      </div>
    );
}


export default Timeline;