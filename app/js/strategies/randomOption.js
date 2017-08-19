const randomOption = (options) => {
  return {
    getOption: () => options[Math.floor(Math.random() * options.length)]
  };
};

export default randomOption;
