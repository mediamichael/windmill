function load({ params }) {
  return {
    stuff: { title: `App ${params.path}` }
  };
}
export {
  load
};
