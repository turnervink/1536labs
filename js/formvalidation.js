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

/*
* Validates the form onsubmit.
*
* If a field is invalid it is highlighted red and an
* error message is displayed. If the field becomes
* valid but the form still cannot submit, the highlighting
* and error message clear to prevent user confusion.
*/
function formValidate() {
  console.log("Validating form");

  var canSubmit = true;

  var selPosition = testPositionValid("selPosition");
  var radPassedWeb = testPassedCourseValid("radPassedWeb_0");
  var txtStartDate = testDateValid();
  var filResume = testResumeFileValid_2("filResume");
  var txtFirstName = testNameValid_2("txtFirstName");
  var txtLastName = testNameValid_2("txtLastName");
  var txtEmail = testEmailValid("txtEmail");
  var txtPhone = testPhoneValid_2();

  if (!selPosition) {
    console.log("Position invalid!");
    canSubmit = false;
    $("itmPosition").className = "error";
    $("errPosition").innerHTML = "<p class='errMsg'>Please select a position</p>";
  } else {
    clearError("itmPosition", "errTxtStartDate");
  }

  if (!radPassedWeb) {
    console.log("Credentials invalid!");
    canSubmit = false;
    $("itmRadPassedWeb").className = "error";
    $("errRadPassedWeb").innerHTML = "<p class='errMsg'>Please pass COMP 1536 before applying</p>";
  } else {
    clearError("itmRadPassedWeb", "errRadPassedWeb");
  }

  if (!txtStartDate) {
    console.log("Date invalid!");
    canSubmit = false;
    $("itmTxtStartDate").className = "error";
    $("errTxtStartDate").innerHTML = "<p class='errMsg'>Please enter a valid date</p>";
  } else {
    clearError("itmTxtStartDate", "errTxtStartDate");
  }

  if (!filResume) {
    console.log("Resume invalid!");
    canSubmit = false;
    $("itmFilResume").className = "error";
    $("errFilResume").innerHTML = "<p class='errMsg'>Please upload a PDF or DOC/DOCX</p>";
  } else {
    clearError("itmFilResume", "errFilResume");
  }

  if (!txtFirstName) {
    console.log("Fname invalid!");
    canSubmit = false;
    $("itmTxtName").className = "error";
    $("errTxtName").innerHTML = "<p class='errMsg'>Please enter a valid name</p>";
  } else {
    clearError("itmTxtName", "errTxtName");
  }

  if (!txtLastName) {
    console.log("Lname invalid!");
    canSubmit = false;
    $("itmTxtName").className = "error";
    $("errTxtName").innerHTML = "<p class='errMsg'>Please enter a valid name</p>";
  } else {
    clearError("itmTxtName", "errTxtName");
  }

  if (!txtEmail) {
    console.log("Email invalid!");
    canSubmit = false;
    $("itmTxtEmail").className = "error";
    $("errTxtEmail").innerHTML = "<p class='errMsg'>Please enter a valid email</p>";
  } else {
    clearError("itmTxtEmail", "errTxtEmail");
  }

  if (!txtPhone) {
    console.log("Phone invalid!");
    canSubmit = false;
    $("itmTxtPhone").className = "error";
    $("errTxtPhone").innerHTML = "<p class='errMsg'>Please enter a valid phone number</p>";
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

function testResumeFileValid_2(id) {
  var pattern = /^.+\.(doc|docx|pdf)$/;

  return pattern.test($(id).value);
}

// First and last name
function testNameValid(id) {
  if ($(id).value.length > 0) {
    return true;
  }

  return false;
}

function testNameValid_2(id) {
  var pattern = /^[A-z]+$/;

  return pattern.test($(id).value);
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

function testEmailValid_2(id) {
  var pattern = /^[A-z0-9._-]+@[A-z0-9._-]+\.[A-z0-9._-]{2,}$/;

  return pattern.test($(id).value);
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

function testPhoneValid_2() {

  var pattern = /^[0-9]{3}$/;
  var pattern2 = /^[0-9]{4}$/

  var areaCode = $("txtPhone_0").value;
  var threeDigits = $("txtPhone_1").value;
  var fourDigits = $("txtPhone_2").value;

  return pattern.test(areaCode) && pattern.test(threeDigits) && pattern2.test(fourDigits);
}
