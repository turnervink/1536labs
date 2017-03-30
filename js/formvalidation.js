// Helper function
function $(id) {
  var element = document.getElementById(id);

  if (element == null) {
    alert("Error: " + element + " does not exist!");
  }

  return element;
}

function clearError(box, msg) {
  $(box).className = "";
  $(msg).innerHTML = "";
}

function formValidate() {
  console.log("Validating form");

  var canSubmit = true;

  var selPosition = testPositionValid("selPosition");
  var radPassedWeb = testPassedCourseValid("radPassedWeb_0");
  var txtStartDate = testDateValid();
  var filResume = testResumeFileValid("filResume");
  var txtFirstName = testNameValid("txtFirstName");
  var txtLastName = testNameValid("txtLastName");
  var txtEmail = testEmailValid("txtEmail");
  var txtPhone = testPhoneValid();

  if (!selPosition) {
    console.log("Position invalid!");
    canSubmit = false;
    $("itmPosition").className = "error";
    $("errPosition").innerHTML = "<p class='errMsg'>Please select a position</a>";
  } else {
    clearError("itmPosition", "errTxtStartDate");
  }

  if (!radPassedWeb) {
    console.log("Credentials invalid!");
    canSubmit = false;
    $("itmRadPassedWeb").className = "error";
    $("errRadPassedWeb").innerHTML = "<p class='errMsg'>Please pass COMP 1536 before applying</a>";
  } else {
    clearError("itmRadPassedWeb", "errRadPassedWeb");
  }

  if (!txtStartDate) {
    console.log("Date invalid!");
    canSubmit = false;
    $("itmTxtStartDate").className = "error";
    $("errTxtStartDate").innerHTML = "<p class='errMsg'>Please enter a valid date</a>";
  } else {
    clearError("itmTxtStartDate", "errTxtStartDate");
  }

  if (!filResume) {
    console.log("Resume invalid!");
    canSubmit = false;
    $("itmFilResume").className = "error";
    $("errFilResume").innerHTML = "<p class='errMsg'>Please upload a PDF or DOC/DOCX</a>";
  } else {
    clearError("itmFilResume", "errFilResume");
  }

  if (!txtFirstName) {
    console.log("Fname invalid!");
    canSubmit = false;
    $("itmTxtName").className = "error";
    $("errTxtName").innerHTML = "<p class='errMsg'>Please enter your name</a>";
  } else {
    clearError("itmTxtName", "errTxtName");
  }

  if (!txtLastName) {
    console.log("Lname invalid!");
    canSubmit = false;
    $("itmTxtName").className = "error";
    $("errTxtStartDate").innerHTML = "<p class='errMsg'>Please enter your name/a>";
  } else {
    clearError("itmTxtName", "errTxtName");
  }

  if (!txtEmail) {
    console.log("Email invalid!");
    canSubmit = false;
    $("itmTxtEmail").className = "error";
    $("errTxtEmail").innerHTML = "<p class='errMsg'>Please enter a valid email</a>";
  } else {
    clearError("itmTxtEmail", "errTxtEmail");
  }

  if (!txtPhone) {
    console.log("Phone invalid!");
    canSubmit = false;
    $("itmTxtPhone").className = "error";
    $("errTxtPhone").innerHTML = "<p class='errMsg'>Please enter a valid phone number</a>";
  } else {
    clearError("itmTxtPhone", "errTxtPhone");
  }

  return canSubmit;

}

// Job position
function testPositionValid(id) {
  return ($(id).selectedIndex != 0);
}

// Passed COMP 1536
function testPassedCourseValid(id) {
  if ($(id).checked) {
    return true;
  }
  return false;
}

// Earliest start date
function testDateValid() {
  var day = $("txtStartDate_0").value;
  var month = $("txtStartDate_1").value;
  var year  = $("txtStartDate_2").value;

  var dayValid = (day >= 1 && day <= 31);
  var monthValid = (month >= 1 && month <= 12);
  var yearValid = (year >= 2017 && year <= 2999);

  if (dayValid && monthValid && yearValid) {
    return true;
  }

  return false;
}

// Resume file
function testResumeFileValid(id) {
  if ($(id).value == "") {
    return true;
  } else {
    var fileName = $(id).value;
    var documentEnding = fileName.substring(fileName.length - 4); // Get the file extension

    if (documentEnding.substring(1) == "doc" || documentEnding == "docx" || documentEnding.substring(1) == "pdf") {
      return true;
    } else {
      return false;
    }
  }
}

// First and last name
function testNameValid(id) {
  if ($(id).value.length > 0) {
    return true;
  }

  return false;
}

// Email
function testEmailValid(id) {
  var element = $(id).value;
  var domainEnding = element.substring(element.length - 4);
  if ($(id).value.length > 0 && (domainEnding == ".com" || domainEnding == ".org" || domainEnding.substring(1) == ".ca")) {
    return true;
  }

  return false;
}

// Phone
function testPhoneValid() {
  var areaCode = $("txtPhone_0").value;
  var threeDigits = $("txtPhone_1").value;
  var fourDigits = $("txtPhone_2").value;

  var areaCodeValid = (areaCode >= 100 && areaCode <= 999);
  var threeDigitsValid = (threeDigits >= 100 && threeDigits <= 999);
  var fourDigitsValid = (fourDigits >= 1000 && fourDigits <= 9999);

  if (areaCodeValid && threeDigitsValid && fourDigitsValid) {
    return true;
  }

  return false;
}
