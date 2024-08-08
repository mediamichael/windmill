function load({ params }) {
  return {
    stuff: { title: `Run ${params.run}` }
  };
}
export {
  load
};
