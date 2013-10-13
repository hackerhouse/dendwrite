/**
  This file contains a simple object to contain any initialization logic that
  may need to exist for the chrome extension, namely.

  - Global config parameters: The top level file config.json contains
  parameters that are handled by grunt-replace that change global configuration
  details, such as the remote URL used in communicating setting up dendwrite.

  - Namespacing: Even though we are isolated from the page (as well as from
  other scripts), this should be injected along with JQuery and give us a nicer
  application namespace to work in.

**/

var Dendwrite = window.Dendwrite  = {};

// Remote dendwrite host
Dendwrite.remoteURL = "http://@@hostname:@@port";

//
// helper methods
//

// Because we debug a page context rather than the 'whole extension', it is
// tough to get access to a window that we can log messages to in a fashion
// similar to the regular JS console. Instead, we just send new messages we'd
// like logged as a post to this.remoteURL + '/log'.
Dendwrite.log = function(message) {
  console.log(message);
  $.ajax({
    type: 'POST',
    url: Dendwrite.remoteURL + '/log',
    data: message
  });
};

// Raises an exception if there is no currentUser.
Dendwrite.currentUser = function() {
  var currentUser = localStorage.currentUser;
  if (!currentUser) { throw("No current user saved"); }
  return JSON.parse(currentUser);
};
