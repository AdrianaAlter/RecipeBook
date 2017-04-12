var Dispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants.js');

var SessionActions = {
  currentUserReceived: function(currentUser) {
    Dispatcher.dispatch({
      actionType: SessionConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  logOut: function () {
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }

};

module.exports = SessionActions;
