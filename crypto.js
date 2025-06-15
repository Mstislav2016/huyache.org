
function cryptographing(frm) {
  const inp = frm["ftext"].value;
  let out = "";

  for (let i = 0; i < inp.length; i++) {
    let a = inp.charCodeAt(i);
    a = 0xFFFF ^ a;
    out += String.fromCharCode(a);
  }

  frm["fcrypto"].value = out;
  return false;
}