import React from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

export default class Post extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object.isRequired
  };

  rawHTML(html) {
    return { __html: html, sanitize: true };
  }
  render() {
    return (
      <div>

        <h2>Latest Posts</h2>
        <hr />
        <div className="mdl-grid portfolio-max-width">
          {this.props.viewer.posts.edges.map(edge => {
            return (
              <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card"  key={edge.node.id}>
                <div className="mdl-card__media">
                  <img className="article-image" src="http://lorempixel.com/400/200/abstract" border="0" alt=""></img>
                </div>
                <div className="mdl-card__title">
                  <h2 className="mdl-card__title-text" dangerouslySetInnerHTML={this.rawHTML(edge.node.title.rendered)}></h2>
                </div>
                <div className="mdl-card__supporting-text">
                  <span dangerouslySetInnerHTML={this.rawHTML(edge.node.excerpt.rendered)}></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
