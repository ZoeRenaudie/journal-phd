export const load = async ({ params }) => {
  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true })
  
  const normalizeSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

  const cleanTag = (tag) => tag.split('/').pop()

  const allEntries = Object.entries(modules).map(([path, mod]) => {
    const filename = path.split('/').pop().replace('.md', '')
    const slug = normalizeSlug(filename)
    const cleanedTags = (mod.metadata.tags ?? []).map(cleanTag)
    return { slug, ...mod.metadata, tags: cleanedTags }
  })

  const tag = params.theme
  const entries = tag === 'tous'
    ? allEntries
    : allEntries.filter(e => e.tags?.includes(tag))

  // Tous les tags pour le menu
  const allTags = [...new Set(allEntries.flatMap(e => e.tags ?? []))].sort()
  const tagCounts = allTags.reduce((acc, t) => {
    acc[t] = allEntries.filter(e => e.tags?.includes(t)).length
    return acc
  }, {})

  return { entries, tag, allTags, tagCounts, total: allEntries.length }
}