import * as types from './array'

// TODO: test this one and deploy it. A copy exists in p2src
// TODO: Use Exclude<> or something to exclude first argument from typeof
declare global {
  interface Array<T> {
    js1Chunk: typeof types.chunk;
    js1CountBy: typeof types.countBy;
    js1FirstDuplicateBy: typeof types.firstDuplicateBy;
    js1FlatMap: typeof types.flatMap;
    js1FlatMapDeep: typeof types.flatMapDeep;
    js1FlatMapDepth: typeof types.flatMapDepth;
    js1FlattenBy: typeof types.flattenBy;
    js1GroupBy: typeof types.groupBy;
    js1GroupByKeyVal: typeof types.groupByKeyVal;
    js1GroupByValues: typeof types.groupByValues;
    js1KeyBy: typeof types.keyBy;
    js1MaxBy: typeof types.maxBy;
    js1MeanBy: typeof types.meanBy;
    js1MinBy: typeof types.minBy;
    js1OrderBy: typeof types.orderBy;
    js1Partition: typeof types.partition;
    js1SampleSize: typeof types.sampleSize;
    js1Shuffle: typeof types.shuffle;
    js1SortBy: typeof types.sortBy;
    js1SumBy: typeof types.sumBy;
    js1TakeRightWhile: typeof types.takeRightWhile;
    js1TakeWhile: typeof types.takeWhile;
    js1Uniq: typeof types.uniq;
    js1UniqBy: typeof types.uniqBy;
    js1ToggleArray: typeof types.toggleArray;
  }
}
