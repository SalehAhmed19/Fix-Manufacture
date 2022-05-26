import React from "react";

const Blogs = () => {
  return (
    <div>
      <h2 className="text-primary text-center font-bold text-3xl">Blogs</h2>
      <div className="my-3">
        <div className="p-5 m-5 border rounded-md">
          <h2 className="text-primary font-bold text-xl">
            How will you improve the performance of a React Application?
          </h2>
          <ul className="list-disc ml-5">
            <li>Use React.Fragment to Avoid Adding Extra Nodes to the DOM</li>
            <li>Use Production Build</li>
            <li>
              Use React.Suspense and React.Lazy for Lazy Loading Components
            </li>
            <li>Use React.memo for Component Memoization</li>
            <li>Virtualize a Large List Using react-window</li>
            <li>Wrapping up</li>
          </ul>
        </div>
      </div>
      <div className="my-3">
        <div className="p-5 m-5 border rounded-md">
          <h2 className="text-primary font-bold text-xl">
            How does prototypical inheritance work?
          </h2>
          <p>
            JavaScript only has one construct for inheritance: objects. Each
            object has a private property that contains a reference to its
            prototype, which is another object. That prototype object has its
            own prototype, and so on, until an object with null as its prototype
            is reached. By definition, null has no prototype, and acts as the
            final link in this prototype chain.
          </p>
        </div>
      </div>
      <div className="my-3">
        <div className="p-5 m-5 border rounded-md">
          <h2 className="text-primary font-bold text-xl">
            What is a unit test? Why should write unit tests?
          </h2>
          <p>
            A unit test is a brief function that produces a pass/fail result
            after testing the behavior of a small unit of production code. Unit
            testing is a valuable method for ensuring code quality since it
            allows developers to detect errors early in the development process.
          </p>
        </div>
      </div>
      <div className="my-3">
        <div className="p-5 m-5 border rounded-md">
          <h2 className="text-primary font-bold text-xl">
            Why you do not set the state directly in React? For example, if you
            have const [products, setProducts] = useState([]). Why you do not
            set products = [...] instead, you use the setProducts
          </h2>
          <p>
            When we use useState to declare a state variable, it returns a pair
            – an array with two entries. The current value is the first item,
            and the second is a function that allows us to change it. Because
            they have a specific meaning, using [0] and [1] to access them is a
            little perplexing. This is why array destructuring is used instead.
            Event handlers, server responses, or prop modifications can all
            cause state to be modified. The setState() method is used to do this
            task. The setState() method enqueues all component state updates and
            tells React to re-render the component and its descendants with the
            new state.
          </p>
        </div>
      </div>
      <div className="my-2">
        <div className="p-5 m-5 border rounded-md">
          <h2 className="text-primary font-bold text-xl">
            HWhat are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            There are four main types of state you need to properly manage in
            your React apps:
          </p>
          <ul className="list-disc ml-5">
            <li>
              <h3 className="font-bold">Local state</h3>
              <p>
                Data that we handle in one or more components is referred to as
                local state.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Global state</h3>
              <p>
                Data that we handle across several components is referred to as
                global state.
              </p>
            </li>
            <li>
              <h3 className="font-bold">Server state</h3>
              <p>
                Data from an external server that has to be combined with our
                current UI state.
              </p>
            </li>
            <li>
              <h3 className="font-bold">URL state</h3>
              <p>
                Data found on our URLs, such as path names and query parameters.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
