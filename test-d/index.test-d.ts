import {expectType} from 'tsd';
import PQueue from '../source/index.js';

const queue = new PQueue();

expectType<Promise<string | void>>(queue.add(async () => '🦄'));
expectType<Promise<string>>(queue.add(async () => '🦄', {throwOnTimeout: true}));
expectType<Promise<void>>(queue.onPendingZero());
