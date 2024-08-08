function load({ params }) {
  return {
    stuff: { title: `Flow ${params.path}` }
  };
}
export {
  load
};
