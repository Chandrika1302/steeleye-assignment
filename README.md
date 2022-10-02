1.Explain what the simple List component does.
Answer:
const List = memo(WrappedListComponent);
->whenever a state changes the wholecomponent re-renders.And not only the main component if there are any child components they also re-renders 
-> Using memo will cause React to skip rendering a component if its props have not changed.
->
