import React from 'react';
import useResources from '../utils/useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

// *************************************************

// import React, { Component } from 'react';
// import axios from 'axios';

// export default class ResourceList extends Component {
//   state = { resources: [] };

//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`
//     );

//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`
//       );

//       this.setState({ resources: response.data });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Resource list</h1>
//         {this.props.resource}
//         {this.state.resources.length}
//       </div>
//     );
//   }
// }
