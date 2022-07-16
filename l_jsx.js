(function (root, fun) {
  root["l_jsx"] = fun();
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

  create = function (obj) {
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

  l_jsx = function (obj) {
    if (obj.tag) {
      var l_jsxObj = document.createElement(obj.tag);
    }
    if (obj.content) {
      l_jsxObj.innerHTML = obj.content;
    }
    if (obj.attribute) {
      if (obj.attribute.length === 0) {
        key = Object.keys(obj.attribute[0]);
        l_jsxObj.setAttribute(key[0], obj.attribute[0][key[0]]);
      } else {
        for (var i = 0; i < obj.attribute.length; i++) {
          if (obj.attribute[i]) {
            key = Object.keys(obj.attribute[i]);
            if (obj.attribute[i][key[0]]) {
              l_jsxObj.setAttribute(key[0], obj.attribute[i][key[0]]);
            }
          }
        }
      }
    }
    if (obj.child) {
      for (var i = 0; i < obj.child.length; i++) {
        if (window.l_jsx.l_jsx(obj.child[i])) {
          l_jsxObj.appendChild(window.l_jsx.l_jsx(obj.child[i]));
        }
      }
    }
    return l_jsxObj;
  };
  getDOM = function (obj) {
    window.l_jsx.l_jsx(obj);
  };

  return {
    create: create,
    l_jsx: l_jsx,
    getDOM: getDOM,
  };
});
