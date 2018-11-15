const curURL = window.location.href;

if (curURL === "https://sso.cdk.com/adfs/ls/idpinitiatedsignon.aspx") {
  if (document.getElementById("idp_ThisRpRadioButton").checked === true) {
    document.getElementById("idp_OtherRpRadioButton").checked = true;
    document.getElementById("idp_ThisRpRadioButton").checked = false;
    document.getElementById("idp_RelyingPartyDropDownList").disabled = false;
  }
  document.getElementById("idp_RelyingPartyDropDownList").querySelector("option[value='ae05ef51-b11c-e811-80f3-0050569214ee']").selected = true;
  document.getElementById("idp_GoButton").click();
} else if (curURL === "https://connectcdk.okta.com/app/UserHome") {
  window.open("https://websites.cobalt.com/wsm/index.do","_self");
}