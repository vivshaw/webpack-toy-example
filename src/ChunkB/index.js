/*
 * here, we also import asychronously from Chunk A.
 * But the code isn't duplicated into this Chunk B. */
const { concat } = import("../ChunkA");

export const bar = (bar) => concat(bar, " World!");
