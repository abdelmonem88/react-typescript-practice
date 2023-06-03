# Summary of some react advanced concepts

### Pure component

- Pure component is a class component that running shouldComponentUpdate method when only the prebv state and prev props are differences the current state and the current props NOT with every re-render of it's parent component  (that all done using the shallow comparison)
- You can use pure component to prevent unnecessary rerenders  for the sake of performance-enhancing.

### Portals

- React portals provides a way to render JSX outside the main element in your app (ex: your main perent is <body><div id="root"></div></body> with portals you act like this <body><div id="root"></div><div id="portal-root"></div></body>).
- Inside the portal root you can render and content using ReactDom.CreatePortal() method.
- ReactDom.CreatePortal() take 2 arguments the first one is the children you want to render into the root portal (simply the portal content) and the second one is the portal root it self (you accsess it with DOM traversing).

### Error Boundary

- Is a way to handle errors in react
- Instead of white empty screen that appers when error happens it will show a meaningful screen.

### Higher-Order Component (HOC)

- Is a pattern enables us to reuse component logic.
- HOC is a function that takes a component as an argument and returns a new component.


### Render Props

- Is a pattern enables us to reuse component logic.
- Rernder Props a technique for sharing code between React components using a prop whose value is a function.
