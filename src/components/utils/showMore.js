import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ReactMarkDown from 'react-markdown'


const useStyles = theme => ({
    paragraph: {
        fontFamily: "'PT Serif', serif",
        wordSpacing: 3,
        fontSize: 16,
    },
    footNote: {
        fontSize: 14,
        fontStyle: 'italic',
        color: 'grey',
        cursor:'pointer'
    },
});
class showMore extends Component {
    static defaultProps = {
        lines: 3,
        more: 'Read more',
        less: 'Read less',
        anchorClass: ''
    }

    static propTypes = {
        children: PropTypes.node,
        lines: PropTypes.number,
        more: PropTypes.node,
        less: PropTypes.node,
        anchorClass: PropTypes.string
    }

    state = {
        expanded: false,
        truncated: false
    }

    handleTruncate = truncated => {
        if (truncated !== this.state.truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines = event => {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }
    splitData(text, id) {
        if (!this.state.expanded) {
            const splitText = text.slice(0, 500);
            const n = splitText.lastIndexOf(".");
            return (splitText.slice(0, n) + '.')
        }
        else {
            return text
        }
    }

    render() {
        const {
            children,
            more,
            less,
        } = this.props;

        const { classes } = this.props;
        return (
            <div>
                <ReactMarkDown className={classes.paragraph} source={this.splitData(children)} escapeHtml={false}></ReactMarkDown>
                <p className={classes.footNote}  onClick={this.toggleLines}>{this.state.expanded?(less):more}</p>
            </div>
        );
    }
}

export default withStyles(useStyles)(showMore);