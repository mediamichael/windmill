function load({ params }) {
  return {
    stuff: { title: `Script ${params.hash}` }
  };
}
export {
  load
};
