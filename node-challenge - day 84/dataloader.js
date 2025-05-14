import DataLoader from 'dataloader';

const users = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

const createLoaders = () => ({
  user: new DataLoader(async (ids) => {
    console.log('Batching IDs:', ids);
    return ids.map(id => users.find(u => u.id === id));
  })
});

export default createLoaders;
