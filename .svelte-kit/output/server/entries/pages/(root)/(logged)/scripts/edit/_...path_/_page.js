function load({ params }) {
  return {
    stuff: { title: `Edit Script ${params.path}` }
  };
}
export {
  load
};
