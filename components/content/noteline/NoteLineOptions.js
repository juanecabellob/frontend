import React from 'react';

/*
import IconButton from 'material-ui/IconButton';
import Chip from 'material-ui/Chip';

import ActionTouchApp from 'material-ui/svg-icons/action/touch-app';
import ContentMoveToInbox from 'material-ui/svg-icons/content/move-to-inbox';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import { iconStyles, importantColors, highlightColors } from './Helpers';
*/

import ImportantIcon from './ImportantIcon';
import HighlightIcon from './HighlightIcon';

class NoteLineOptions extends React.Component {
  /*
  showChips() {
    if (this.props.reminder.set) {
      return (
        <Chip
          style={{height: 20, marginTop: 7}}
          labelStyle={{
          padding: 4,
          top: 14,
          margin: 4,
          marginTop: 0,
          paddingTop: 0,
          lineHeight: '1.6em',
          height: 20}}
        >
        </Chip>
      )
    }
  }
  */

  render() {
    const { onHighlight, onImportant, highlight, important, last } = this.props;

    if (!last) {
      return (
        <div style={{
          width: '100%',
          margin: 0,
          height: 20,
          display: 'inline-flex'
        }}>
          <ImportantIcon
            onChangeDo={onImportant}
            important={important}
            />
          <HighlightIcon
            onChangeDo={onHighlight}
            highlight={highlight}
            />
        </div>
      );
    }

    return null;
  }
}

NoteLineOptions.propTypes = {
  onHighlight: React.PropTypes.func.isRequired,
  onImportant: React.PropTypes.func.isRequired,
  highlight: React.PropTypes.shape({
    set: React.PropTypes.bool.isRequired,
    color: React.PropTypes.any.isRequired,
    value: React.PropTypes.any.isRequired
  }).isRequired,
  important: React.PropTypes.shape({
    set: React.PropTypes.bool.isRequired,
    color: React.PropTypes.any.isRequired,
    value: React.PropTypes.any.isRequired
  }).isRequired,
  last: React.PropTypes.bool.isRequired
};

export default NoteLineOptions;
