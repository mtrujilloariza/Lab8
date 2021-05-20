/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';

describe('history length', ()=> {
  test('history length with with not push', () => {
    expect(history.length).toBe(1);
  });
  
  test('history length with one push entry', () => {
    expect(pushToHistory('entry', 1).length).toBe(2);
  });

  test('history length with one push settings', () => {
    expect(pushToHistory('settings', -1).length).toBe(3);
  });

  test('history length with one push index', () => {
    expect(pushToHistory('index', -1).length).toBe(4);
  });
})

describe('history state at index', () => {
  test('history length with with not push', () => {
    expect(JSON.stringify(history.state)).toBe('{}');
  });

  test('history state at entry', () => {
    expect(JSON.stringify(pushToHistory('entry', 1).state)).toBe("{\"page\":\"entry1\"}");
  });

  test('history state at settings', () => {
    expect(JSON.stringify(pushToHistory('settings', -1).state)).toBe("{\"page\":\"settings\"}");
  });
})