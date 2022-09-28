In this example:

- ChunkA is a split chunk exporting two functions: `foo` and `concat`
- ChunkB is a split chunk exporting one function: `bar`
- ChunkB imports `concat` from ChunkA

Since one chunk is importing from another, there is no duplication. ChunkB simply depends on ChunkA directly, and `concat` exists solely inside ChunkA.
