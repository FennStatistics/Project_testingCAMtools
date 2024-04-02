/* 
################### introduction phase ###################
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

      // show respective questions
      $("#dummy_type, #dummy_type2").on("click", () => {
        if($('#dummy_type').is(':checked')){
          $("#type_bug").show();
          $("#type_improvement").hide();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_CAMApp").hide();
          $("#type_improvement_Webpage").hide();
        }else{
          $("#type_bug").hide();
          $("#type_improvement").show();

          $("#type_improvement_CAMEL").hide();
          $("#type_improvement_CAMApp").hide();
          $("#type_improvement_Webpage").hide();
        }
      });


      $("#tool_improvement").on("input", () => {
        var tmpValue = $("#tool_improvement option:selected")[0].value;
       
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
    

      
    },
    commit: () => {
      // get URL params
      if (typeof jatos.jQuery === "function") {
        // URLparams_global = jatos.urlQueryParameters;
        // console.log("URLparams_global:", URLparams_global);

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
    new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    Report_htmlForm,
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
