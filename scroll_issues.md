The Window.scroll() method scrolls the window to a particular place in the document.

window.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});

<button onClick="scroll(0, 100);">click to scroll down 100 pixels</button>


x-coord is the pixel along the horizontal axis
y-coord is the pixel along the vertical axis


element.scrollIntoView(alignToTop);

If true, the top of the element will be aligned to the top of the visible area of the scrollable ancestor.
If false, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor.