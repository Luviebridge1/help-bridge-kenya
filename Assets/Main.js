// main.js - lightweight helpers for M-Pesa UI
function copyToClipboard(text){
  navigator.clipboard?.writeText(text).then(()=> {
    alert('Copied to clipboard: ' + text);
  }, ()=> {
    prompt('Copy this number:', text);
  });
}

function showMpesaSteps(){
  const number = '+254758820459';
  const modalText = `To donate via M-Pesa (Send Money):\n\n1) Open your M-Pesa menu.\n2) Choose "Send Money".\n3) Enter recipient number: ${number}\n4) Enter amount and your name.\n5) Confirm and send.\n\nThank you for supporting HelpBridge Kenya.`;
  alert(modalText);
}
