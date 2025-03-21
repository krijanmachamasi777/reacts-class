const Component1 = () => {
  return <div>
     <h1>Component 1</h1>
  <Component2/>
  
  </div>;

};
const Component2 = () => {
  return <div><h1>Component 2</h1>
  <Component3/>
  </div>;
};
const Component3 = () => {
  return <div><h1>Component 3</h1>
  
  </div>;
};

export default Component1;