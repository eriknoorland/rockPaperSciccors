const player = (name, strategy) => {
  let playerStrategy = strategy;

  return {
    setStrategy: (strategy) => { playerStrategy = strategy },
    getName: () => name,
    getChoice: () => playerStrategy.getOption()
  };
}

export default player;
