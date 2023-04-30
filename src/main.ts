/* eslint-disable no-console */
import {
  LatestTodoTitlesProjection,
  TodosTableProjection,
  TodoAdded,
  TodoDone,
  TodoEvent,
  TodoRemoved,
} from './todos/index.js'
import { Observable } from './data/observable.js'
import { NewsletterService } from './apps/newsletter.js'
import { WebAPIService } from './apps/web-api.js'
import { WebUIService } from './apps/web-ui.js'

function main() {
  const eventBus = Observable<TodoEvent>([])

  const todosDb = TodosTableProjection({})
  const latestTodos = LatestTodoTitlesProjection([])

  eventBus.addListener(todosDb.processEvent)
  eventBus.addListener(latestTodos.processEvent)

  const mockEvents = [
    TodoAdded({ id: '0', title: 'learn fp' }),
    TodoAdded({ id: '1', title: 'separate reads and writes' }),
    TodoDone({ id: '0' }),
    TodoAdded({ id: '2', title: 'leverage ts type system' }),
    TodoAdded({ id: '3', title: 'find carmen san diego' }),
    TodoDone({ id: '1' }),
    TodoRemoved({ id: '3' }),
    TodoDone({ id: '2' }),
  ]

  const webAPI = new WebAPIService(mockEvents, eventBus)
  const webUI = new WebUIService(todosDb)
  const newsletter = new NewsletterService(latestTodos)

  return Promise.all([webUI.run(), webAPI.run(), newsletter.run()])
}

main()
