const { foo } = import(/* webpackChunkName: "ChunkA" */ "./ChunkA");
const { bar } = import(/* webpackChunkName: "ChunkB" */ "./ChunkB");

const result = bar(foo());
