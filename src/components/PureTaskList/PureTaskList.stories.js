import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './PureTaskList';
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

storiesOf('PureTaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions}></PureTaskList>)
  .add('widthPinnedTasks', () => <PureTaskList tasks={widthPinnedTasks} {...actions}></PureTaskList>)
  .add('loading', () => <PureTaskList loading={true} tasks={[]} {...actions}></PureTaskList>)
  .add('empty', () => <PureTaskList tasks={[]} {...actions}></PureTaskList>)