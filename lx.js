(function (root, fun) {
  root.lx = fun();
})(window, function () {
  var documentObj = {
    tag: null,
    attribute: [],
    content: null,
    child: [],
    set: function (prop, value) {
      for (var i = 0; i < documentObj.attribute.length; i++) {
        key = Object.keys(documentObj.attribute[i]);
        if (key[0] === prop) {
          documentObj.attribute[i][prop] = value;
        }
      }
    },
    getDocumentObj: function () {
      return documentObj;
    },
    addChild: function (obj) {
      if (obj) {
        documentObj.child.push(obj);
      }
    },
  };

  var lx = function (obj) {
    if (obj.tag) {
      var lxObj = document.createElement(obj.tag);
    }
    if (obj.content) {
      lxObj.innerHTML = obj.content;
    }
    if (obj.attribute) {
      if (obj.attribute.length === 0) {
        key = Object.keys(obj.attribute[0]);
        lxObj.setAttribute(key[0], obj.attribute[0][key[0]]);
      } else {
        for (var i = 0; i < obj.attribute.length; i++) {
          if (obj.attribute[i]) {
            key = Object.keys(obj.attribute[i]);
            if (obj.attribute[i][key[0]]) {
              lxObj.setAttribute(key[0], obj.attribute[i][key[0]]);
            }
          }
        }
      }
    }
    if (obj.child) {
      for (var i = 0; i < obj.child.length; i++) {
        if (lx(obj.child[i])) {
          lxObj.appendChild(lx(obj.child[i]));
        }
      }
    }
    return lxObj;
  };
  lx.create = function (obj) {
    if (obj.tag) {
      documentObj.tag = obj.tag;
      console.log(documentObj.tag);
    }
    if (obj.content) {
      documentObj.content = obj.content;
      console.log(documentObj.content);
    }
    if (obj.attribute) {
      documentObj.attribute = obj.attribute;
      console.log(documentObj.attribute);
    } else {
      documentObj.attribute = null;
    }
    if (obj.child) {
      documentObj.child = obj.child;
      console.log(documentObj.child);
    }
    return documentObj;
  };

  return lx;
});
