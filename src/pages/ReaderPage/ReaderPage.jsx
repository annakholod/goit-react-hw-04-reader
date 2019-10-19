import React, { Component } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Reader from '../../components/Reader/Reader';
import items from '../../accepts/publications.json';

class ReaderPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    count: 1,
  };

  componentDidMount() {
    const { count } = this.state;
    const { history, location } = this.props;

    const parseQueryStr = queryString.parse(location.search).item;
    if (
      !parseQueryStr ||
      Number(parseQueryStr) > items.length ||
      Number(parseQueryStr) === 0
    ) {
      return history.push({
        pathname: '/reader',
        search: `item=${count}`,
      });
    }
    return this.setState({
      count: parseQueryStr - 1,
    });
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevCount = queryString.parse(prevProps.location.search).item;
    const nextCount = queryString.parse(location.search).item;

    if (prevCount !== nextCount) {
      this.updateCount(nextCount);
    }
  }

  updateCount = nextCount => {
    this.setState({
      count: nextCount - 1,
    });
  };

  changeCount = evt => {
    const { name } = evt.target;
    const { history, location } = this.props;
    const parseQueryStr = queryString.parse(location.search).item;

    if (name === 'increment') {
      history.push({
        pathname: '/reader',
        search: `item=${Number(parseQueryStr) + 1}`,
      });
    } else {
      history.push({
        pathname: '/reader',
        search: `item=${Number(parseQueryStr) - 1}`,
      });
    }
  };

  render() {
    const { count } = this.state;

    return (
      <Reader items={items} count={count} changeCount={this.changeCount} />
    );
  }
}

export default ReaderPage;
