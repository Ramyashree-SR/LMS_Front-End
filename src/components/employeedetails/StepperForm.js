import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import AddressDetails from './AddressDetails';
import BankDetails from './BankDetails';
import Contact from './Contact';
import EducationDetails from './EducationDetails';
import Experience from './Experience';
import PrimaryInfo from './PrimaryInfo';
import SecondaryInfo from './SecondaryInfo';
import "./stepperform.css";
import TechanicalSkills from './TechnicalSkills';
const { Step } = Steps;


function StepperForm(){
const steps = [
  {
    title: 'PrimaryInfo',
    content: <PrimaryInfo/>,
    
  },
  {
    title: 'Secondary Info',
    content: <SecondaryInfo/>,
  },
  {
    title: 'Education Details',
    content: <EducationDetails/>,
  },
  {
    title: 'Address Details',
    content: <AddressDetails/>,
  },
  {
    title: 'Bank Details',
    content: <BankDetails/>,
  },
  {
    title: 'Technical Skills',
    content: <TechanicalSkills/>
  },
  {
    title: 'Experience',
    content: <Experience/>,
},
{
  title: 'Contact',
  content: <Contact/>,

},
  
];


  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
      {current > 0 && (
          <Button
            style={{
              marginLeft: '200px',
              
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Record Updated Successfully')}
          style={{
            marginLeft: '700px',
            
          }}>
            Done
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={{
            marginLeft: '700px',
            
          }}>
            Next
          </Button>
        )}
      </div>
    </>
  );

          }
export default StepperForm;