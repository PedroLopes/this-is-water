function replaceElementText(id, text)
{
  if (document.getElementById)
  {
    var e=document.getElementById(id);
    if (e)
    {
      if (e.childNodes[0])
      {
        e.childNodes[0].nodeValue=text;
      }
      else if (e.value)
      {
        e.value=text;
      }
      else 
      {
        e.innerHTML=text;
      }
    }
  }
}

function replaceClassname(id, text)
{
  if (document.getElementById)
  {
    var e=document.getElementById(id);
    if (e)
    {
      if (e.childNodes[0])
      {
        e.childNodes[0].className=text;
      }
    }
  }
}

function sendMessageServer(id,d){
    //alert(id);
    //alert(d);
    client.publish('/water', {
      data: d
  });
}

  
function execute(who,what) {
    sendMessageServer(who,what);
    //replaceElementText("1", "Showing you water!"); // loop through musicians and disable test.
  }

function re_label(e,text) {
  e.innerHTML=text; 
}

function re_label_all(text) {
    var e=document.getElementById("1");
    e.innerHTML=text; 
}
