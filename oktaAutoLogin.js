const curURL = window.location.href;

if (curURL === "https://sso.cdk.com/adfs/ls/idpinitiatedsignon.aspx") {
  // auto select Okta (Prod)
  window.onload = () => {
    if (document.getElementById("idp_ThisRpRadioButton").checked === true) {
      document.getElementById("idp_OtherRpRadioButton").checked = true;
      document.getElementById("idp_ThisRpRadioButton").checked = false;
      document.getElementById("idp_RelyingPartyDropDownList").disabled = false;
      document.getElementById("idp_RelyingPartyDropDownList").querySelector("option[value='ae05ef51-b11c-e811-80f3-0050569214ee']").selected = true;
    }
    document.getElementById("idp_GoButton").click();
  };
} else if (curURL === "https://connectcdk.okta.com/app/UserHome") {
  // auto select DCC
  window.onload = () => {
    setTimeout(function() {
      const DCCLink = document.querySelector("a[data-se='app-button-0oa7jc6iwxXAtbpGb1t7']");
      DCCLink.target = "_self";
      DCCLink.click();
    }, 2000);
  };
} else if (curURL === "https://portal.cobalt.com/") {
  // auto choose WSM
  window.onload = () => {
    document.querySelector('#website p.button-container a').click();
  };
}