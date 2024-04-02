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
</form>


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
    <select id="tool_bug" name="tool_bug" required class="w-100">
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
    <select id="tool_improvement" name="tool_improvement" required class="w-100">
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
    <select id="improvement_CAMEL_element" name="improvement_CAMEL_element" required class="w-100">
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
  <input type="improvement_CAMEL_importance" name="improvement_CAMEL_importance" min="1" max="9" step="1">
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
    <select id="improvement_CAMApp_part" name="improvement_CAMApp_part" required class="w-100">
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
  <input type="improvement_CAMApp_importance" name="improvement_CAMApp_importance" min="1" max="9" step="1">
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
    <select id="improvement_Webpage_part" name="improvement_Webpage_part" required class="w-100">
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
  <input type="improvement_Webpage_importance" name="improvement_Webpage_importance" min="1" max="9" step="1">
  </td>
</tr>

<!-- Column balance -->
<colgroup>
  <col style="width: 50%">
  <col style="width: 50%">
</colgroup>
</table>


</div> 
 </main>
 


 <footer class="content-vertical-center content-horizontal-right">
 To submit your bug / suggestion for improvement, please press &nbsp;
   <button id="continue" type="submit" form="page-form">
       Send &rarr;
   </button>
 </footer>
   `,
}


