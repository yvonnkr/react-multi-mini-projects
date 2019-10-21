import React from 'react';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const CommentsApp = () => {
  return (
    <div className='ui container comments' style={{ margin: '3rem auto' }}>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='Steve Smith'
          timeAgo='Today at 6:00PM'
          content='Nice Blog post'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='John Doe'
          timeAgo='Today at 4:00PM'
          content='Awesome post'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author='Jen'
          timeAgo='Yesterday at 1:00PM'
          content='Very Informative'
        />
      </ApprovalCard>
    </div>
  );
};

export default CommentsApp;

//ReactDOM.render(<App />, document.querySelector('#root'));
// ReactDOM.render(<App />, document.getElementById('root'));
