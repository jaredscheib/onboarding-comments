// Actions file
export const SUBMIT_COMMENT = 'SUBMIT_COMMENT';

export const submitComment = (comment) => {
  console.log('action submitComment', comment);
  return {
    type: SUBMIT_COMMENT,
    payload: comment,
  };
};

export default () => ({ type: 'SILLY_ACTION' });
