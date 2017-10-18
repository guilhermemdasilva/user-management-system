// eslint-disable-line
export const USERS = 'users';

export default () => {
  return new Promise(resolve => {
    resolve({
      users: [
        {
          id: 1,
          name: 'Guilherme',
          birthday: new Date('1987-08-28'),
          email: 'guilherme.mdasilva@gmail.com',
          icon: 'man',
          login: 'guilermetell',
          password: '*******',
          groups: [6, 4, 3, 2, 1],
        },
        {
          id: 2,
          name: 'Alyssa',
          birthday: new Date('1987-08-22T00:00:00-0400'),
          email: 'alyssa@gmail.com',
          icon: 'woman',
          login: 'alyssa3',
          password: '*******',
          groups: [5, 3],
        },
        {
          id: 3,
          name: 'Ricardo',
          birthday: new Date('1990-08-22T00:00:00-0400'),
          email: 'ricardo@gmail.com',
          icon: 'man',
          login: 'ricardo',
          password: '*******',
          groups: [4, 2],
        },
        {
          id: 4,
          name: 'Fernando',
          birthday: new Date('1961-08-22T00:00:00-0400'),
          email: 'fernando@gmail.com',
          icon: 'man',
          login: 'fernando',
          password: '*******',
          groups: [3, 1],
        },
        {
          id: 5,
          name: 'Iracema',
          birthday: new Date('1962-08-22T00:00:00-0400'),
          email: 'iracema@gmail.com',
          icon: 'woman',
          login: 'iracema',
          password: '*******',
          groups: [2],
        },
        {
          id: 6,
          name: 'Juvenal',
          birthday: new Date('1959-08-22T00:00:00-0400'),
          email: 'juvenal@gmail.com',
          icon: 'man',
          login: 'juvenal',
          password: '*******',
          groups: [1],
        },
      ],
      delete: (id) => {
        const isUser = u => u.id !== id;
        return this.players.filter(isUser);
      },
    });
  });
};