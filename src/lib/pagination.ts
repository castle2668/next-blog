export function getPaginatedPosts<T>(
  items: T[],
  page: number = 1,
  pageSize: number = 10
) {
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const totalPages = Math.ceil(items.length / pageSize)

  return {
    items: items.slice(startIndex, endIndex),
    pagination: {
      page,
      pageSize,
      totalPages,
      totalItems: items.length,
      hasNextPage: endIndex < items.length,
      hasPrevPage: startIndex > 0,
    },
  }
}
