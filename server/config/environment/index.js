import _ from 'lodash';

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  url: 'http://nicklewis.net/wp-json/wp/v2/posts?filter[category_name]=WordPressExperiment,technology',
  graphql: {
    port: 8000
  }
};

export default _.extend(config, require(`./${config.env}`).default);
