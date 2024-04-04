const textObj = {
   // introduction phase
   greetings: `
   <header>
   <div class="row">
   <div class="column2">
   <h2> Thank you for reporting bugs or possible improvements for the Cognitive-Affective Map (CAM) tools. </h2>
 </div>
   <div class="column">
   <img src="pre_CAM/static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 

 
 <main class="content-horizontal-center content-vertical-center">

 <div class="w-xl text-justify" style="display: block">
 We appreciate your help in improving the tools. Please answer the following questions carefully. 
 If you face any problems or if you have questions please contact Julius Fenn (<a href="mailto:cam.contact@drawyourminds.de">cam.contact@drawyourminds.de</a>).
<br>
<i>Please scroll down to fill in all required fields</i>.
<br>
<br>

<form id="page-form">
 <table>
 <!-- type -->
 <tr style="height: 100px">
   <td class="text-left">
   Please choose if you want to report a <b>bug</b> or a possible <b>improvement</b> for the CAM tools:
   </td>
   <td>
   <input type="radio" name="dummy_type" value="bug" id="dummy_type" required>
   <label for="dummy_type" class="text-left">
    report a <b>bug</b>
  </label>
<br>
<input type="radio" name="dummy_type" value="improvement" id="dummy_type2" required>
<label for="dummy_type2" class="text-left">
report a possible <b>improvement</b>
</label>
   </td>
 </tr>
 <!-- Column balance -->
 <colgroup>
   <col style="width: 50%">
   <col style="width: 50%">
 </colgroup>
</table>





<table id="type_bug" style="display: none">
<!-- Remark -->
<tr style="height: 100px">
  <td class="text-left" colspan="2">
  Please only enter possible identified problems with the current software and no suggestions for improvement (use "report a possible improvement").
  </td>
</tr>

<!-- tool -->
<tr style="height: 100px">
  <td class="text-left">
  For which tool would you like to report a <b>bug</b>?
  </td>
  <td>
    <select id="bug_tool" name="bug_tool" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="CAMEL">Data Collection: Cognitive-Affective Map Extended Logic (C.A.M.E.L.).</option>
      <option value="CAMApp">Data Analysis: CAM-App.</option>
      <option value="Webpage">Wegpage: administrative panel.</option>
    </select>
  </td>
</tr>


<!-- bug CAMEL element -->
<tr style="height: 100px" id="bug_part_CAMEL">
  <td class="text-left">
  For which <b>element (concept, connection, other)</b> would you like to report a bug?
  </td>
  <td>
    <select id="bug_CAMEL_element" name="bug_CAMEL_element" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="concept">Concept (ideas, goals drawn by participants).</option>
      <option value="connection">Connection (connections drawn between concepts).</option>
      <option value="other">Other.</option>
    </select>
  </td>
</tr>


<!-- bug CAMApp part -->
<tr style="height: 100px" id="bug_part_CAMApp">
  <td class="text-left">
  For which <b>part (upload, preprocessing, analysis)</b> would you like to report a bug?
  </td>
  <td>
    <select id="bug_CAMApp_part" name="bug_CAMApp_part" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="upload">Upload Part (when you enter the CAM-App).</option>
      <option value="preprocessing">Preprocessing Part (when you clicked on the respective button).</option>
      <option value="analysis">Analysis Part (when you clicked on the respective button).</option>
    </select>
  </td>
</tr>


<!-- bug Webpage part -->
<tr style="height: 100px" id="bug_part_Webpage">
  <td class="text-left">
  For which <b>part (before log in, after log in, other)</b> of the webpage (administrative panel) would you like to report a bug?
  </td>
  <td>
    <select id="bug_Webpage_part" name="bug_Webpage_part" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="beforeLogIn">Before log in (before you have logged in into your account).</option>
      <option value="afterLogIn">After log in (after you have logged in into your account).</option>
      <option value="other">Other.</option>
    </select>
  </td>
</tr>


<!-- bug browser used -->
<tr style="height: 50px" class="bug_allOthers">
  <td class="text-left">
  <img src = "pre_CAM/static/browser icons/programmer-computer-icon.svg" alt="Browser Icon" width="50px;" heigth="50px";>
  Which Browser do you have used?
  </td>
  <td>
<div id="placeholder_browser">XXX</div>

<input type="radio" name="bug_browser_used" value="right" id="browserUsed">
<label for="browserUsed" class="text-left">
✔ Right
</label>
<br>
<input type="radio" name="bug_browser_used" value="wrong" id="browserUsed2">
<label for="browserUsed2" class="text-left">
✘ Wrong <span style="font-size: 14px;">(I encountered the issue on a different device or browser)</span>
</label>
  </td>
</tr>



<!-- bug additional browser used -->
<tr style="height: 100px" class="bug_allOthers">
  <td class="text-left" colspan="2">
  Please select another browser you have tested on the bug you want to report.
  <br>
  
  <input type="checkbox" id="Chrome" class="icon-checkbox">
  <label for="Chrome" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-chrome-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Chrome</p>
  </label>

  <input type="checkbox" id="Edge" class="icon-checkbox">
  <label for="Edge" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-edge-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Edge</p>
  </label>

  <input type="checkbox" id="Firefox" class="icon-checkbox">
  <label for="Firefox" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-firefox-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Firefox</p>
  </label>

  <input type="checkbox" id="Internet Explorer" class="icon-checkbox">
  <label for="Internet Explorer" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-internet-explorer-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Internet Explorer</p>
  </label>

  <input type="checkbox" id="Opera" class="icon-checkbox">
  <label for="Opera" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-opera-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Opera</p>
  </label>

  <input type="checkbox" id="Safari" class="icon-checkbox">
  <label for="Safari" class="icon-label">
    <img src = "pre_CAM/static/browser icons/browser-safari-icon.svg" alt="" width="50px;" heigth="50px";>
    <p style="margin-left: 5px;">Safari</p>
  </label>
  </td>
</tr>


<!-- bug text -->
<tr style="height: 100px" class="bug_allOthers">
  <td class="text-left">
  <img src = "pre_CAM/static/browser icons/interview-icon.svg" alt=" " width="50px;" heigth="50px";>
  OK, now the vital part!
  <br>
  <br>
  <div>
  Please <b>describe what happened</b>, including any steps you took before you saw the problem. 
  </div>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  </p>
  </td>
  <td>
  <textarea id="bug_text" name="bug_text" class="w-100" rows="8"></textarea>
  </td>
</tr>


<!-- bug screenshot -->
<tr style="height: 100px" class="bug_allOthers">
  <td class="text-left">
  <img src = "pre_CAM/static/browser icons/screenshot-capture-icon.svg" alt=" " width="50px;" heigth="50px";>
Screenshots are super helpfull!
  <br>
  <br>
  <div>
  Do you have a screenshot of the issue you would like to share? 
  </div>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Darg and Drop image in the gray box (or click on it). A preview of your screenshot will be shown below.
  </p>
  </td>
  <td>


<input class="dragBox" type="file" onChange="dragNdrop(event)"  ondragover="drag()" ondrop="drop()" id="uploadFile">
</input>
  </td>
</tr>



<!-- bug screenshot preview -->
<tr style="height: 100px" class="bug_allOthers">
  <td class="text-left" colspan="2">
  If you have uploaded an image a preview is shown here: 
  <div id="preview">
  <i>preview image</i>
  </div>
    </td>
</tr>




<!-- bug code -->
<tr style="height: 100px" class="bug_allOthers">
  <td class="text-left">
  <img src = "pre_CAM/static/browser icons/js-file-icon.svg" alt=" " width="50px;" heigth="50px";>
Error code is key!
  <br>
  <br>
  <div>
  Do you have identified any code (e.g., error messages in the Browser console) that could help us to identify the issue?
  </div>
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Just copy and paste the code (with some explenations if needed).
  </p>
  </td>
  <td>
  <textarea id="bug_code" name="bug_code" class="w-100" rows="8"></textarea>
  </td>
</tr>


<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>







<table id="type_improvement" style="display: none">

<!-- Remark -->
<tr style="height: 100px">
  <td class="text-left" colspan="2">
  Please only enter possible suggestions for improvement and do not add any identified problems with the current software (use "report a bug").
  </td>
</tr>

<!-- tool -->
<tr style="height: 100px">
  <td class="text-left">
  For which tool would you like to suggest a possible <b>improvement</b>?
  </td>
  <td>
    <select id="improvement_tool" name="improvement_tool" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="CAMEL">Data Collection: Cognitive-Affective Map Extended Logic (C.A.M.E.L.).</option>
      <option value="CAMApp">Data Analysis: CAM-App.</option>
      <option value="Webpage">Wegpage: administrative panel.</option>
    </select>
  </td>
</tr>


<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>



<!-- !!! type_improvement_CAMEL !!! -->
<table id="type_improvement_CAMEL" style="display: none">
<!-- improvement CAMEL element -->
<tr style="height: 100px">
  <td class="text-left">
  For which <b>element (concept, connection, other)</b> would you like to suggest an improvement?
  </td>
  <td>
    <select id="improvement_CAMEL_element" name="improvement_CAMEL_element" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="concept">Concept (ideas, goals drawn by participants).</option>
      <option value="connection">Connection (connections drawn between concepts).</option>
      <option value="other">Other.</option>
    </select>
  </td>
</tr>


<!-- improvement CAMEL text -->
<tr style="height: 100px">
  <td class="text-left">
  Please describe as precisely as possible what could be improved in the data collection tool (C.A.M.E.L.).
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Please write a precise answer.
  </p>
  </td>
  <td>
  <textarea id="improvement_CAMEL_text" name="improvement_CAMEL_text" class="w-100" rows="5"></textarea>
  </td>
</tr>


<!-- improvement CAMEL importance  -->
<tr style="height: 100px">
  <td class="text-left">
  Please indicate how important you think this improvement would be for the data collection tool (C.A.M.E.L.) by writing a number between 1 and 9.
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  (1 = not really important, 9 = very important; 5 = of average importance)
    </p>
  </td>
  <td class="center-content">
  <input type="number" name="improvement_CAMEL_importance" min="1" max="9" step="1">
  </td>
</tr>

<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>


<!-- !!! type_improvement_CAMApp !!! -->
<table id="type_improvement_CAMApp" style="display: none">
<!-- improvement CAMApp part -->
<tr style="height: 100px">
  <td class="text-left">
  For which <b>part (upload, preprocessing, analysis)</b> would you like to suggest an improvement?
  </td>
  <td>
    <select id="improvement_CAMApp_part" name="improvement_CAMApp_part" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="upload">Upload Part (when you enter the CAM-App).</option>
      <option value="preprocessing">Preprocessing Part (when you clicked on the respective button).</option>
      <option value="analysis">Analysis Part (when you clicked on the respective button).</option>
    </select>
  </td>
</tr>


<!-- improvement CAMApp text -->
<tr style="height: 100px">
  <td class="text-left">
  Please describe as precisely as possible what could be improved in the data analysis tool (CAM-App).
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Please write a precise answer.
  </p>
  </td>
  <td>
  <textarea id="improvement_CAMApp_text" name="improvement_CAMApp_text" class="w-100" rows="5"></textarea>
  </td>
</tr>


<!-- improvement CAMApp importance  -->
<tr style="height: 100px">
  <td class="text-left">
  Please indicate how important you think this improvement would be for the data analysis tool (CAM-App) by writing a number between 1 and 9.
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  (1 = not really important, 9 = very important; 5 = of average importance)
    </p>
  </td>
  <td class="center-content">
  <input type="number" name="improvement_CAMApp_importance" min="1" max="9" step="1">
  </td>
</tr>

<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>


<!-- !!! type_improvement_Webpage !!! -->
<table id="type_improvement_Webpage" style="display: none">
<!-- improvement Webpage part -->
<tr style="height: 100px">
  <td class="text-left">
  For which <b>part (before log in, after log in, other)</b> of the webpage (administrative panel) would you like to suggest an improvement?
  </td>
  <td>
    <select id="improvement_Webpage_part" name="improvement_Webpage_part" class="w-100">
      <option value="" selected>
      -- Please select --
      </option>
      <option value="beforeLogIn">Before log in (before you have logged in into your account).</option>
      <option value="afterLogIn">After log in (after you have logged in into your account).</option>
      <option value="other">Other.</option>
    </select>
  </td>
</tr>


<!-- improvement Webpage text -->
<tr style="height: 100px">
  <td class="text-left">
  Please describe as precisely as possible what could be improved in the webpage (administrative panel).
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Please write a precise answer.
  </p>
  </td>
  <td>
  <textarea id="improvement_Webpage_text" name="improvement_Webpage_text" class="w-100" rows="5"></textarea>
  </td>
</tr>


<!-- improvement Webpage importance  -->
<tr style="height: 100px">
  <td class="text-left">
  Please indicate how important you think this improvement would be for the webpage (administrative panel) by writing a number between 1 and 9.
  <br>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  (1 = not really important, 9 = very important; 5 = of average importance)
    </p>
  </td>
  <td class="center-content">
  <input type="number" name="improvement_Webpage_importance" min="1" max="9" step="1">
  </td>
</tr>

<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>

</form>
</div> 
 </main>
 


 <footer class="content-vertical-center content-horizontal-right">
 To submit your bug / suggestion for improvement, please press &nbsp;
   <button id="continue" type="submit" form="page-form">
       Send &rarr;
   </button>
 </footer>
   `,
   feedbackQues: `
   <header>
     <h2>
    You can leave any comments, thanks for reporting a bug or suggesting an improvement!
     </h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center" >
   <div class="w-l">
   Just repreat this study if you want to report another bug or suggest another improvement.
    <br>
    <br>
     <form id="page-form" style="display: block;" autocomplete="off">
 <!-- multiline text text --> 
 <div class="page-item page-item-textarea" id="page-item-feedback_critic">
   <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
   Do you have any feedback for me to develop the CAM tools? 
   </p>
   <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
   Any criticism or suggestions for improvement will be of great help in improving the tools.
   </p>
   <textarea name="feedback_critic" class="w-100" rows="4"></textarea>
 </div>
 <!-- END multiline text --> 
      
     </form>
   </div> 
 </main>
   
   <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
   End study &rarr;
 </button>
 </footer>
   `,



}


