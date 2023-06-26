import { ErrorRepository } from '../js/error';
import { Team } from '../js/team';

test('error true', () => {
  const err = new ErrorRepository();
  expect(err.translate('200')).toEqual('OK');
});

test('error false', () => {
  const err = new ErrorRepository();
  expect(err.translate('205')).toEqual('Unknown error');
});

test('team add', () => {
  const team = new Team();
  expect(team.add({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  })).toEqual(Set[{
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }]);
});

test('team addAll', () => {
  const team = new Team();
  expect(team.addAll({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }, {
    name: 'Iva',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  })).toEqual(Set[{
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }, {
    name: 'Iva',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }
  ]);
});

test('team toArray', () => {
  const team = new Team();
  team.add({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
  expect(team.toArray()).toEqual([{
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  }]);
});

test('team error', () => {
  const team = new Team();
  team.add({
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
  });
  function testError() {
    team.add({
      name: 'Ivan',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    });
  }
  expect(testError).toThrow('A user was exist!');
});
