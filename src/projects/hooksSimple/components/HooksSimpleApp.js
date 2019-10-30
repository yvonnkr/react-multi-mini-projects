import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const HooksSimpleApp = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default HooksSimpleApp;

// ************** Class Based State ******************************

// import React, { Component } from 'react';

// export default class HooksSimpleApp extends Component {
//   state = { resource: 'posts' };
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({ resource: 'posts' })}>
//             Posts
//           </button>
//           <button onClick={() => this.setState({ resource: 'todos' })}>
//             Todos
//           </button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }
