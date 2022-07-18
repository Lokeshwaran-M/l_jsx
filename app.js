var nav = {
  tag: "nav",
  attribute: [
    {
      class:
        "navbar flex justify-between px-3 py-3 pb-1 pl-1 bg-black text-white",
    },
  ],
  child: [
    {
      tag: "div",
      attribute: [{ class: "container" }],
      child: [{ tag: "p", content: "Start Bootstrap" }],
    },
    {
      tag: "div",
      attribute: [{ class: "container flex justify-between" }],
      child: [
        { tag: "p", content: "home" },
        { tag: "p", content: "about us" },
        { tag: "p", content: "contact" },
        { tag: "p", content: "link" },
      ],
    },
  ],
};

var main = {
  tag: "main",
  attribute: [{ class: "content" }],
  child: [
    {
      tag: "h1",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of",
    },
    {
      tag: "p",
      content:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of",
    },
  ],
};

var box = {
  tag: "div",
  attribute: [{ class: "flex" }],
  child: [
    {
      tag: "div",
      attribute: [{ class: "m-2 p-8 bg-slate-400" }],
      child: [
        {
          tag: "h2",
          attribute: [{ class: "text-xl font-black m-4 " }],
          content: "Lorem Ipsum ",
        },
        {
          tag: "p",
          content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of",
        },
      ],
    },
    {
      tag: "div",
      attribute: [{ class: "m-2 p-8 bg-slate-400" }],
      child: [
        {
          tag: "h2",
          attribute: [{ class: "text-xl font-black m-4 " }],
          content: "Lorem Ipsum ",
        },
        {
          tag: "p",
          content:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of",
        },
      ],
    },
    {tag: "div",
    attribute: [{ class: "m-2 p-8 bg-slate-400" }],
    child: [
      {
        tag: "h2",
        attribute: [{ class: "text-xl font-black m-4 " }],
        content: "Lorem Ipsum ",
      },
      {
        tag: "p",
        content:
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of",
      },
    ],},
  ],
};
var footer = {
  tag: "footer",
  attribute: [{ class: "footer bg-black text-white flex justify-center " }],
  child: [
    {
      tag: "div",
      content: "app@lok.com",
    },
  ],
};
var appBody = l_jsx.create({
  tag: "div",
});
appBody.addChild(nav);
appBody.addChild(main);
appBody.addChild(box);
appBody.addChild(footer);

var app = l_jsx(appBody);
console.log(app);
