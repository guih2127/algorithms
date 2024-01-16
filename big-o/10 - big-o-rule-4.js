// Rule number 4 says that we can drop the non-relevant terms.
// So, for example, a function that would have an O(n + n^2) notation, becomes just O(N^2).
// We always keep the dominant term.