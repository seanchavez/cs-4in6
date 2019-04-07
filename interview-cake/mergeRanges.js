const clonedeep = require("lodash.clonedeep");

const mergeRanges = (meetings) => {
  meetingsClone = clonedeep(meetings);

  const sorted = meetingsClone.sort((a, b) => a.startTime - b.startTime);

  const merged = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    const lastMerged = merged[merged.length - 1];

    if (current.startTime <= lastMerged.endTime) {
      lastMerged.endTime = Math.max(lastMerged.endTime, current.endTime);
    } else {
      merged.push(current);
    }
  }
  return merged;
}
