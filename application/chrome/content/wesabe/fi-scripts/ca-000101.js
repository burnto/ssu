wesabe.download.Player.register({
  fid: 'ca-000101',
  org: 'Vancity',

  // change to true if frames have meaningful content,
  // and that "dispatch" should be run for the document
  dispatchFrames: false,

  afterDownload: 'logoff',

  actions: {
    // The "main" action is the entry point into the script,
    // and is the first thing that is run. It should trigger
    // a page load, which calls "dispatch" (see login.js).
    main: function() {
      wesabe.dom.browser.go(browser, "https://www.vancity.com/MyMoney/");
    },
  },

  includes: [
    'fi-scripts.ca-000101.login',
    'fi-scripts.ca-000101.accounts',
  ],
});
