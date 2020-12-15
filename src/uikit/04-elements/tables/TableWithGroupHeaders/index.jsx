import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Table from '../Table';

const EMPTY_GROUP_HEADERS_DEFAULT_CLASS = 'empty-table-header';

class TableWithGroupHeaders extends Component {
  constructor(props) {
    super(props);

    const { columns } = props;

    this.node = React.createRef();
    this.groupedHeaders = [];
    this.hasNonEmptyGroupHeader = false;
    this.buildGroupedHeaders(columns);
  }

  componentDidMount() {
    if (this.hasNonEmptyGroupHeader) {
      // eslint-disable-next-line react/no-find-dom-node
      const node = ReactDOM.findDOMNode(this.node.current);
      const tableHeader = node.querySelector('thead');
      const tableHeaderRow = this.createTableGroupedHeaderRow();

      this.groupedHeaders.forEach(th => {
        const thToAdd =
          th.className === EMPTY_GROUP_HEADERS_DEFAULT_CLASS
            ? this.createEmptyGroupedTableHeader()
            : this.createGroupedTableHeader(th);
        tableHeaderRow.appendChild(thToAdd);
      });

      this.insertTableGroupHeaders(tableHeaderRow, tableHeader);
    }
  }

  createTableGroupedHeaderRow = () => {
    const tr = document.createElement('tr');
    tr.classList.add('GroupTableHeaders');
    return tr;
  };

  createEmptyGroupedTableHeader = () => {
    const th = document.createElement('th');
    th.classList.add(EMPTY_GROUP_HEADERS_DEFAULT_CLASS);
    th.classList.add('sectionBreak');
    return th;
  };

  createGroupedTableHeader = ({ className, colSpan, label }) => {
    const th = document.createElement('th');
    const thClassName = className ? className.split(' ') : ['text-center'];
    th.classList.add(...thClassName);
    th.setAttribute('colSpan', `${colSpan}`);
    th.setAttribute('align', 'center');
    th.innerText = label;
    return th;
  };

  insertTableGroupHeaders = (groupedHeaderRow, tableHead) => {
    tableHead.insertBefore(groupedHeaderRow, tableHead.firstChild);
  };

  buildGroupedHeaders = columns => {
    if (columns && columns.length === 0) return;

    const { groupHeader } = columns[0];

    // Check on first column
    let currentLabel = groupHeader && groupHeader.text ? groupHeader.text : null;

    if (groupHeader && groupHeader.text) {
      this.groupedHeaders.push({
        label: groupHeader.text,
        colSpan: 1,
        className: groupHeader.className,
      });

      this.hasNonEmptyGroupHeader = true;
      currentLabel = groupHeader.text;
    } else {
      this.groupedHeaders.push({ className: EMPTY_GROUP_HEADERS_DEFAULT_CLASS });
    }

    if (columns.length === 1) return;

    // Check on the rest of the columns
    for (let i = 1; i < columns.length; i++) {
      const currentGroupHeader = columns[i].groupHeader;
      if (currentGroupHeader && currentGroupHeader.text) {
        this.hasNonEmptyGroupHeader = true;
        if (currentGroupHeader.text !== currentLabel) {
          this.groupedHeaders.push({
            label: currentGroupHeader.text,
            colSpan: 1,
            className: currentGroupHeader.className,
          });
          currentLabel = currentGroupHeader.text;
        } else {
          this.groupedHeaders[this.groupedHeaders.length - 1].colSpan++;
        }
      } else {
        this.groupedHeaders.push({ className: EMPTY_GROUP_HEADERS_DEFAULT_CLASS });
      }
    }
  };

  render() {
    return <Table {...this.props} ref={this.node} />;
  }
}

TableWithGroupHeaders.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableWithGroupHeaders;
