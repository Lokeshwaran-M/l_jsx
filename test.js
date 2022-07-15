var myObj = l_jsx.create({
    tag: "div",
    attribute: [{ class: "app" },{id : "aid"}],
    child: null,
  });
  myObj.set("class","main");
  var mycobj = {
    tag:"p",
    content:"hi this is l_jsx"
  }

  myObj.addChild(mycobj)
  var nodedom = l_jsx.l_jsx(myObj)
  console.log(nodedom)
  l_jsx.getDOM(myObj)