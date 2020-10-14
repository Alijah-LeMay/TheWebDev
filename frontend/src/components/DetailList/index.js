import React from 'react';
import Radium from 'radium';
import MyButton from '../utils/Button';

const DetailList = ({ content, buttons }) => {
  let contentArray = [];
  for (let key in content) {
    contentArray.push(content[key]);
  }
  let rStyle = {
    detailContainer: {
      display: 'flex',
      backgroundColor: '#f2f2f2',
      justifyContent: 'center',
    },
    detailElement: {
      padding: '5px 6px',
      margin: '5px',
      border: '1px solid #333',
    },
  };
  return (
    <div style={rStyle.detailContainer}>
      {contentArray.map((element, index) => (
        <div style={rStyle.detailElement} key={index}>
          {element}
        </div>
      ))}
      {buttons.map((button, index) => (
        <MyButton
          key={index}
          content={button.content}
          to={`/admin/site/${content._id}/edit`}
        />
      ))}
    </div>
  );
};

export default Radium(DetailList);
