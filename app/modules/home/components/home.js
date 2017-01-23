import React from 'react';
import Nav from '../../../modules/common/components/nav/nav';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props.onNextPage(nextProps.location.pathname);
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default App;
