import { KeeperContext } from './KeeperContext';

const KeeperContaxtProvider = ({children}) => {
    const keeperData = {};
  return (
    <KeeperContext.Provider value={keeperData}>
        {children}
    </KeeperContext.Provider>
  );
};

export default KeeperContaxtProvider;