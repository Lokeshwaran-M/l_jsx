# l_jsx (lx)

l_jsx alis lx is javascript processor that converts javascript object models to html code snippets 

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


