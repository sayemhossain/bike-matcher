import React from "react";
import "./QuestionAns.css";

const QuestionAns = () => {
  return (
    <div className="my-5 container">
      <h1 className="text-center mb-5 text-uppercase">Some Basic Question</h1>
      <h4 className="text-primary fw-bold">1. State vs Props</h4>
      <div className="row question-answer ">
        <div className="col-lg-6 state p-4">
          <h3 className="text-center bg-secondary p-2">State</h3>
          <p>1. State are Mutable</p>
          <p>2. You can define states in the component itself</p>
          <p>3. The state is set and updated by the object</p>
          <p>4. State changes can be asynchronous</p>
        </div>
        <div className="col-lg-6 p-4">
          <h3 className="text-center bg-secondary p-2">Props</h3>
          <p>1. Props are immutable</p>
          <p>2. You can pass properties from parent component</p>
          <p>3. Determine the view upon creation and then they remain static</p>
          <p>4. Props are read only</p>
        </div>
      </div>
      <div>
        <h4 className="mt-5 text-primary">2. How useState() works?</h4>
        <p className="px-3">
          As stated previously, useState enables you to add state to function
          components. Calling React.useState inside a function component
          generates a single piece of state associated with that component.
          Whereas the state in a class is always an object, with Hooks, the
          state can be any type. Each piece of state holds a single value, which
          can be an object, an array, a boolean, or any other type you can
          imagine. So when should you use the useState Hook? It’s especially
          useful for local component state, but larger projects might require
          additional state management solutions.
        </p>
      </div>
    </div>
  );
};

export default QuestionAns;
