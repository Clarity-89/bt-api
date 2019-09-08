module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = item => item.cursor || String(item.id)
}) => {
  let data = [];
  if (pageSize < 1) return data;

  if (!cursor) {
    data = results.slice(0, pageSize);
  } else {
    const cursorIndex = results.findIndex(item => {
      // if an item has a `cursor` on it, use that, otherwise try to generate one
      let itemCursor = item.cursor ? item.cursor : getCursor(item);
      // if there's still not a cursor, return false by default
      return itemCursor ? String(cursor) === String(itemCursor) : false;
    });

    data =
      cursorIndex >= 0
        ? cursorIndex === results.length - 1 // don't let us overflow
          ? []
          : results.slice(
              cursorIndex + 1,
              Math.min(results.length, cursorIndex + 1 + pageSize)
            )
        : results.slice(0, pageSize);
  }
  return data.map(item => ({ ...item, cursor: String(item.id) }));
};
