export const load = async ({ params }) => {
  const modules = import.meta.glob('/src/lib/bibliographie/*.md', { eager: true })
  
  const normalizeSlug = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')

  const allEntries = Object.entries(modules).map(([path, mod]) => {
    const filename = path.split('/').pop().replace('.md', '')
    const slug = normalizeSlug(filename)
    return { slug, ...mod.metadata }
  })

  const theme = params.theme
  const entries = theme === 'tous'
    ? allEntries
    : allEntries.filter(e => (e.theme || 'Autres') === theme)

  return { entries, theme }
}