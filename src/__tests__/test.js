import { ErrorRepository } from '../js/error';
import { Team } from '../js/team';

const objOne = {
  name: 'Ivan',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 0,
  defence: 0,
};

const objTwo = {
  name: 'Iva',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 0,
  defence: 0,
};

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
  expect(team.add(objOne)).toEqual(Set[objOne]);
});

test('team addAll', () => {
  const team = new Team();
  expect(team.addAll(objOne, objTwo)).toEqual(Set[objOne, objTwo]);
});

test('team toArray', () => {
  const team = new Team();
  team.add(objOne);
  expect(team.toArray()).toEqual([objOne]);
});

test('team error', () => {
  const team = new Team();
  team.add(objOne);
  function testError() {
    team.add(objOne);
  }
  expect(testError).toThrow('A user was exist!');
});
