import PropTypes from 'prop-types';

const MessageBox = ({ isMyMessage, textMessage, dummyProfile }) => {
  return (
    <div className={`flex ${isMyMessage && 'flex-row-reverse'}  gap-3`}>
      <img
        src={dummyProfile}
        className='rounded-full h-20 w-20 bg-contain'
        alt='profile'
      />
      <div
        style={{ overflowWrap: 'break-word' }}
        className='bg-grey-900 p-2 text-[14px]  rounded-xl max-w-[300px]'
      >
        <p> {textMessage}</p>
      </div>
    </div>
  );
};

MessageBox.propTypes = {
  isMyMessage: PropTypes.bool,
  textMessage: PropTypes.string,
  dummyProfile: PropTypes.any,
};

export default MessageBox;
