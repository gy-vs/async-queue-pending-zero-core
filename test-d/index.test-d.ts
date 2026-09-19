import {expectType} from 'tsd';
import PQueue from '../source/index.js';

const queue = new PQueue();

expectType<Promise<string | void>>(queue.add(async () => '🦄'));
expectType<Promise<string>>(queue.add(async () => '🦄', {throwOnTimeout: true}));

expectType<Promise<void>>(queue.onEmpty());
expectType<Promise<void>>(queue.onIdle());
expectType<Promise<void>>(queue.onPendingZero());

queue.on('pendingZero', () => {
	expectType<number>(queue.pending);
});
