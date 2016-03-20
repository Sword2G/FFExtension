/**
 * XULSchoolChrome namespace.
 */
if ("undefined" == typeof(XULHistory2fileChrome)) {
  var XULHistory2fileChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
XULHistory2fileChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function(aEvent) {
    window.alert("hello world!");
    let stringBundle = document.getElementById("xulschoolhello-string-bundle");
    let message = stringBundle.getString("xulschoolhello.greeting.label");
    window.alert(message);
  }
};
