// Set our icon (We will want to set it here so we can alter it later)
chrome.browserAction.setIcon({path:"images/icon-38.png"});

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() { });
