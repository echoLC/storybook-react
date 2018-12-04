import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskList from './TaskList';
import { task, actions } from '../Task/Task.stories';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1' },
  { ...task, id: '2', title: 'Task 2' },
  { ...task, id: '3', title: 'Task 3' },
  { ...task, id: '4', title: 'Task 4' },
  { ...task, id: '5', title: 'Task 5' },
  { ...task, id: '6', title: 'Task 6' },
];

export const widthPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
]

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <TaskList tasks={defaultTasks} {...actions}></TaskList>)
  .add('widthPinnedTasks', () => <TaskList tasks={widthPinnedTasks} {...actions}></TaskList>)
  .add('loading', () => <TaskList loading={true} tasks={[]} {...actions}></TaskList>)
  .add('empty', () => <TaskList tasks={[]} {...actions}></TaskList>)