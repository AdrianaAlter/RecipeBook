
var Store = require('flux/utils').Store;
var SessionConstants = require('../constants/session_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var SessionStore = new Store(Dispatcher);

var _currentUser;
var _currentUserFetched = false;

SessionStore.currentUser = function () {
  return _currentUser;
};

SessionStore.currentUserFetched = function () {
  return _currentUserFetched;
};

SessionStore.isLoggedIn = function () {
  return !!_currentUser;
};

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionConstants.CURRENT_USER_RECEIVED:
      _currentUser = payload.currentUser;
      _currentUserFetched = true;
			SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
		  _currentUser = null;
      SessionStore.__emitChange();
      break;
  }
};


module.exports = SessionStore;
