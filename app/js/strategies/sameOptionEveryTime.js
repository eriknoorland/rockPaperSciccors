const sameOptionEveryTime = (options, selectedOption) => {
  return {
    getOption: () => options.find(option => option === selectedOption)
  };
};

export default sameOptionEveryTime;
