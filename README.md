# Context Api


The Context API is a feature of React that allows data to be passed down the component tree without the need for props drilling. It provides a way to share data between components that are not directly related to each other, without having to pass the data through every intermediate component.
Context is essentially a global object that can hold any data that needs to be shared across multiple components. It consists of three main parts:

    Context object
    Provider component
    Consumer component

The problem Context API solves Context API solves the problem of props drilling. When props need to be passed through multiple layers of components, it can lead to code that is hard to read, understand, and maintain. Context API provides an elegant solution to this problem by allowing data to be shared directly between components without having to pass it through intermediate components.

## In Context API, you can pass data from a Child Component to a Parent it requires a slightly different approach than passing data from a parent to a child. Here are some points on how to pass data from a child to a parent component using Context API:

1. Define a context object in the parent component using the createContext method from the React library.

2. Define a state object in the parent component and a function that updates the state.

3. Define a callback function in the parent component that will be used to update the state object. Pass this function down to the child component as a prop.

4. In the child component, use the useContext hook to access the callback function from the parent component.

5. When the child component needs to update the state in the parent component, call the callback function that was passed down as a prop.

6. The callback function in the parent component should update the state object, which will cause a re-render of the parent component and any child components that depend on the state.

7. You can also pass down additional data from the child component to the parent component by including it as an argument to the callback function.


Overall, the Context API provides a powerful way to pass data between components without having to pass it down through every level of the component tree.