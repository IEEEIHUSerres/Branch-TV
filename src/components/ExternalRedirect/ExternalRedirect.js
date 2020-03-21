import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ExternalRedirect extends Component {
    static propTypes = {
      goTo: PropTypes.string,
    };

    constructor(props) {
      super(props);

      this.target = props.goTo;
    }

    componentDidMount() {
      window.location.replace(this.target);
    }

    render() {
      return (
        <div>
          <br />
          <span>Redirecting to {this.target}</span>
        </div>
      );
    }
}

export default ExternalRedirect;
