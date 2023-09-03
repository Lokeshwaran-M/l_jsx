# lx

lx is a basic formate of jsx which helps in building html code snippets from javascript object models

## lx methods :


```js
lx()
lx.create()
obj.set
obj.getDocumentObj
obj.addChild

```


## Object model :

```js
var obj = {
  tag: "div",
  attribute: [
    {
      class: "tailwind",
    },
  ],
  child: [
    {
      tag: "h1",
      content: "head tag ",
    },
    {
      tag: "p",
      content: "paragraph tag that process content",
    },
  ],
};

```
```html
<!-- output : -->

<div class="tailwind">
  <h1>head tag</h1>
  <p>paragraph tag that process content</p>
</div>

```


