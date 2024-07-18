/* 
################### introduction phase ###################
*/

/*
START functions to get browser and operating system information
*/
// from: https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
navigator.browserSpecs = (function () {
  var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: 'IE', version: (tem[1] || '') };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return { name: tem[1].replace('OPR', 'Opera'), version: tem[2] };
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null)
    M.splice(1, 1, tem[1]);
  return { name: M[0], version: M[1] };
})();

// from: https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browsers
function getBrowser() {
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';

  // Safari 3.0+ "[object HTMLElementConstructor]" 
  var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/false || !!document.documentMode;

  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;

  // Chrome 1 - 79
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

  // Edge (based on chromium) detection
  var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;


  var vec_Browser = ["Opera", "Firefox", "Safari", "IE", "Edge", "Chrome", "Edge Chromium", "Blink"];
  var vec_Boolean = [isOpera, isFirefox, isSafari, isIE, isEdge, isChrome, isEdgeChromium, isBlink];


  if (vec_Boolean.reduce((a, b) => a + b, 0) === 1) {
    for (i = 0; i < vec_Browser.length; i++) {
      if (vec_Boolean[i]) {
        //console.log("Browser detected: ", vec_Browser[i]);
        return vec_Browser[i];
      }
    }
  }
}

// from: https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-details-using-javascript
navigator.operatingSystem = (function () {
  var OSName = "Unknown";
  if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) OSName = "Windows 10";
  if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) OSName = "Windows 8.1";
  if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName = "Windows 8";
  if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName = "Windows 7";
  if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName = "Windows Vista";
  if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName = "Windows XP";
  if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName = "Windows 2000";
  if (window.navigator.userAgent.indexOf("Mac") != -1) OSName = "Mac/iOS";
  if (window.navigator.userAgent.indexOf("X11") != -1) OSName = "UNIX";
  if (window.navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  return OSName;
})();
/*
END functions to get browser and operating system information
*/


/*
START functions for drag and drop pictures and convert image to Base64
*/
// from: https://codepen.io/tusharbandal/pen/YWadbB
function dragNdrop(event) {
  var fileName = URL.createObjectURL(event.target.files[0]);
  var preview = document.getElementById("preview");
  var previewImg = document.createElement("img");
  previewImg.setAttribute("src", fileName);
  preview.innerHTML = "";
  preview.appendChild(previewImg);
}
function drag() {
  document.getElementById('uploadFile').parentNode.className = 'draging dragBox';
}
function drop() {
  document.getElementById('uploadFile').parentNode.className = 'dragBox';
}




// global variables
var Base64Image = undefined;

// from: https://stackoverflow.com/questions/17710147/image-convert-to-base64
function readFile() {
  if (!this.files || !this.files[0]) return;

  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    console.log("evt.target.result", evt.target.result)
    Base64Image = evt.target.result;
  });

  FR.readAsDataURL(this.files[0]);
}
/*
END functions for drag and drop pictures and convert image to Base64
*/




const Report_htmlForm = new lab.html.Form({
  title: "Report",
  content: textObj.greetings,
  messageHandlers: {
    run: function anonymous() {
      // check screen size
      if (typeof jatos.jQuery === "function") {
        if (
          study.state.meta.screen_height < 700 &&
          study.state.meta.screen_width < 1200
        ) {
          alert(
            "It seems that your screen size you are using is smaller than 1200x700 pixels (height x width):\n" +
            "> your screen width: " +
            study.state.meta.screen_width +
            " your screen height: " +
            study.state.meta.screen_height +
            "\nStudy is aborted!"
          );
          jatos.abortStudy("study aborted - screen to small");
        }
      }


      // hide all questions as default (bug report)
      $("#bug_part_CAMEL").hide()
      $("#bug_part_CAMApp").hide()
      $("#bug_part_Webpage").hide()

      $(".bug_allOthers").hide()


      // show respective questions
      $("#dummy_type, #dummy_type2").on("click", () => {
        if ($('#dummy_type').is(':checked')) {
          $("#type_bug").show();
          $("#type_improvement").hide();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_CAMApp").hide();
          $("#type_improvement_Webpage").hide();
        } else {
          $("#type_bug").hide();
          $("#type_improvement").show();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_CAMApp").hide();
          $("#type_improvement_Webpage").hide();
        }
      });


      $("#improvement_tool").on("input", () => {
        var tmpValue = $("#improvement_tool option:selected")[0].value;

        if (tmpValue == "CAMEL") {
          $("#type_improvement_CAMEL").show();

          $("#type_improvement_CAMApp").hide();
          $("#type_improvement_Webpage").hide();
        } else if (tmpValue == "CAMApp") {
          $("#type_improvement_CAMApp").show();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_Webpage").hide();
        } else if (tmpValue == "Webpage") {
          $("#type_improvement_Webpage").show();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_CAMApp").hide();
        }
      });


      $("#bug_tool").on("input", () => {
        var tmpValue = $("#bug_tool option:selected")[0].value;
        $(".bug_allOthers").show()
        // change attr name
        // alert("a123")

        $("#placeholder_browser").html(" Did you encounter the issue on <b>this device</b> (" + navigator.operatingSystem + ") using <b>this browser</b> (" + navigator.browserSpecs.name + " " + navigator.browserSpecs.version + ")?");
        if (tmpValue == "CAMEL") {
          $("#bug_part_CAMEL").show()

          $("#bug_part_CAMApp").hide()
          $("#bug_part_Webpage").hide()
        } else if (tmpValue == "CAMApp") {
          $("#bug_part_CAMApp").show()

          $("#bug_part_CAMEL").hide()
          $("#bug_part_Webpage").hide()

        } else if (tmpValue == "Webpage") {
          $("#bug_part_Webpage").show()

          $("#bug_part_CAMEL").hide()
          $("#bug_part_CAMApp").hide()
        }
      });


      // add event listener for convert image to Base64
      document.querySelector("#uploadFile").addEventListener("change", readFile);


    },
    commit: () => {
      if (typeof jatos.jQuery === "function") {

        var array = [];
        // save all checked browser checkboxes:
        $(".icon-checkbox:checked").each(function () {
          // For each checked checkbox, print its id
          array.push($(this).attr('id'));
        });
        console.log("array browsers:", array);

        study.options.datastore.set(
          "bug_browser_used_additional",
          array
        );


        // save browser and operating system
        study.options.datastore.set(
          "automatic_operatingSystem",
          navigator.operatingSystem
        );

        study.options.datastore.set(
          "automatic_browser",
          navigator.browserSpecs.name
        );

        study.options.datastore.set(
          "automatic_browser2",
          getBrowser()
        );

        study.options.datastore.set(
          "automatic_browserVersion",
          navigator.browserSpecs.version
        );


        // save base64 image encoding
        if (Base64Image !== undefined) {
          study.options.datastore.set(
            "Base64Image",
            Base64Image
          );
        }
      }
    }

  }
});




// feedback screen
const FeedbackScreen_htmlScreen = new lab.html.Form({
  title: "FeedbackScreen",
  content: textObj.feedbackQues,
  messageHandlers: {
    commit: () => {
    },
    epilogue: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("my result data sent to JATOS final time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));

        // redirect
        jatos.endStudyAndRedirect(
          "https://drawyourminds.de/", // !!!
          true,
          "everything worked fine"
        );
      }
    },
  },
});


// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "S1 part I: science communication",
    description: "S1 study",
    repository: "",
    contributors: "Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    //new lab.plugins.Fullscreen(),
    // new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    Report_htmlForm,
    FeedbackScreen_htmlScreen
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
