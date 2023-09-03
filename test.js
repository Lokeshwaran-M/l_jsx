var myObj = lx.create({
  tag: "div",
  attribute: [{ class: "app" }, { id: "aid" }],
  child: null,
});
myObj.set("class", "main");
var mycobj = {
  tag: "p",
  content: "hi this is lx",
};

myObj.addChild(mycobj);
var nodedom = lx(myObj);
console.log(nodedom);


