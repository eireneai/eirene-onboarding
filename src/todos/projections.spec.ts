import { TodoAdded, TodoDone, TodoRemoved } from './events.js'
import {
  reduceLatestTodoTitles,
  reduceTodoTable,
} from './projections.js'

describe('Todo Projections', function () {
  describe('reduceLatestTodoTitles', function () {
    it('calculates list of recent titles', function () {
      const result = [
        TodoAdded({ id: '0', title: 'first' }),
        TodoAdded({ id: '1', title: 'second' }),
        TodoAdded({ id: '2', title: 'third' }),
      ].reduce(reduceLatestTodoTitles, [])
      expect(result).toStrictEqual(['first', 'second', 'third'])
    })
    it('drops older titles when the list goes over 5 items', function () {
      const result = [
        TodoAdded({ id: '0', title: 'first' }),
        TodoAdded({ id: '1', title: 'second' }),
        TodoAdded({ id: '2', title: 'third' }),
        TodoAdded({ id: '3', title: 'fourth' }),
        TodoAdded({ id: '4', title: 'fifth' }),
        TodoAdded({ id: '5', title: 'sixth' }),
        TodoAdded({ id: '6', title: 'seventh' }),
      ].reduce(reduceLatestTodoTitles, [])
      expect(result).toStrictEqual([
        'third',
        'fourth',
        'fifth',
        'sixth',
        'seventh',
      ])
    })
  })
  describe('reduceTodoTable', function () {
    it('adds todos to table', function () {
      const result = [
        TodoAdded({ id: '0', title: 'first' }),
        TodoAdded({ id: '1', title: 'second' }),
        TodoAdded({ id: '2', title: 'third' }),
      ].reduce(reduceTodoTable, {})
      expect(result).toStrictEqual({
        '0': { tag: 'Todo', id: '0', title: 'first', done: false },
        '1': { tag: 'Todo', id: '1', title: 'second', done: false },
        '2': { tag: 'Todo', id: '2', title: 'third', done: false },
      })
    })
    it('marks todos as done', function () {
      const result = [
        TodoAdded({ id: '0', title: 'first' }),
        TodoDone({ id: '0' }),
      ].reduce(reduceTodoTable, {})
      expect(result).toStrictEqual({
        '0': { tag: 'Todo', id: '0', title: 'first', done: true },
      })
    })
    it('removes todos', function () {
      const result = [
        TodoAdded({ id: '0', title: 'first' }),
        TodoAdded({ id: '1', title: 'second' }),
        TodoRemoved({ id: '0' }),
      ].reduce(reduceTodoTable, {})
      expect(result).toStrictEqual({
        '1': { tag: 'Todo', id: '1', title: 'second', done: false },
      })
    })
  })
})
