// eslint-disable-line
export const GROUPS = 'groups';

export default () => {
  return new Promise(resolve => {
    resolve({
      groups: [
        {
          id: 1,
          name: 'sheriff',
          created: new Date('2017-08-28T00:00:00-0400'),
          icon: 'sheriff',
          description: 'Group of Sheriffs',
          users: [1, 4, 6],
        },
        {
          id: 2,
          name: 'detective',
          created: new Date('2017-03-28T00:00:00-0400'),
          icon: 'detective',
          description: 'Group of Detectives',
          users: [1, 3, 5],
        },
        {
          id: 3,
          name: 'astronaut',
          created: new Date('2017-04-28T00:00:00-0400'),
          icon: 'astronaut',
          description: 'Group of Astronauts',
          users: [1, 2, 4],
        },
        {
          id: 4,
          name: 'director',
          created: new Date('2017-05-28T00:00:00-0400'),
          icon: 'director',
          description: 'Group of Directors',
          users: [1, 3],
        },
        {
          id: 5,
          name: 'dentist',
          created: new Date('2017-06-28T00:00:00-0400'),
          icon: 'dentist',
          description: 'Group of Dentists',
          users: [2],
        },
        {
          id: 6,
          name: 'lawyer',
          created: new Date('2017-07-28T00:00:00-0400'),
          icon: 'lawyer',
          description: 'Group of Lawyers',
          users: [1],
        },
      ]
    });
  });
};