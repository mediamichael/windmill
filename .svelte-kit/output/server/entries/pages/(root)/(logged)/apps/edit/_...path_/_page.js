function load({ params }) {
  return {
    stuff: { title: `Edit App ${params.path}` }
  };
}
export {
  load
};
