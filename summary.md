# Summary of some advanced concepts in react

### Pure component

- Pure component is a class component that running shouldComponentUpdate method when only the prebv state and prev props are differences the current state and the current props NOT with every re-render of it's parent component  (that all done using the shallow comparison)

- You can use pure component to prevent unnecessary rerenders  for the sake of performance-enhancing.
