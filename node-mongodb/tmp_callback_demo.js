function aysc_call_sample_odata_service(url, callback) {
  var httpRequest; // create our XMLHttpRequest object
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer is stupid
    httpRequest = new
    ActiveXObject("Microsoft.XMLHTTP");
  }
 
  httpRequest.onreadystatechange = function() {
    // inline function to check the status
    // of our request
    // this is called on every state change
    console.log("XMLHttpRequest readyState,status:" + httpRequest.readyState + "," + httpRequest.status);
    if (httpRequest.readyState === 4 &&
      httpRequest.status === 200) {
      callback.call(httpRequest.responseXML);
      // call the callback function
    }
  };
  httpRequest.open('GET', url);
  console.log("XMLHttpRequest is open");
  httpRequest.send();
  console.log("XMLHttpRequest is sent");
}
// call the function
aysc_call_sample_odata_service("http://services.odata.org/V4/Northwind/Northwind.svc/Employees", function() {
  //console.log(this);
  console.log("asynchronous http response call back is executed");
});
console.log("this will run before the above callback");
