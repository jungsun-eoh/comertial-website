import React from 'react';
import { useSelector } from 'react-redux';

const Inquiries = () => {
  const inquiries = useSelector(state => state.inquiryReducer.inquiries);

  return (
    <div>
      {inquiries.map(inquiries => (
        <div className="inquiry" key={Math.random()}>{inquiries.message}</div>

      ))}      
    </div>
  );
};
export default Inquiries;
