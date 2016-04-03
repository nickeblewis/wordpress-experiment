import Relay from 'react-relay';
import Post from './PostComponent';

export default Relay.createContainer(Post, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        posts(first: 9) {
          edges {
            node {
              id
              title {
                rendered
              }
              excerpt {
                rendered
              }
              slug
              link
            }
          }
        }
      }`
  }
});
