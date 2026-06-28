import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { ChevronLeft, Info, ExternalLink } from 'lucide-react'
import { destinations } from '../data/destinations'

const Destination = () => {
  const { id } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const destination = destinations.find((d) => d.id === id)

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await fetch(`/guides/${id}.md`)
        if (!response.ok) throw new Error('Failed to fetch guide')
        const text = await response.text()
        setContent(text)
      } catch (error) {
        console.error('Error fetching guide:', error)
        setContent('# Error\nFailed to load the guide content.')
      } finally {
        setLoading(false)
      }
    }

    if (destination) {
      fetchGuide()
      window.scrollTo(0, 0)
    }
  }, [id, destination])

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
        <Link to="/" className="text-indigo-600 hover:underline">Return Home</Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="text-stone-500 font-medium animate-pulse">Scouting destination...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <Link 
            to="/" 
            className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
          >
            <ChevronLeft size={20} />
            Back to Destinations
          </Link>
          <span className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 shadow-lg">
            {destination.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            {destination.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-100 max-w-2xl drop-shadow-md">
            {destination.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 border border-stone-100">
          <article className="prose prose-stone prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-stone-900
            prose-p:text-stone-600 prose-p:leading-relaxed
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-stone-900
            prose-img:rounded-3xl prose-img:shadow-xl prose-img:mx-auto
            prose-hr:border-stone-100 prose-hr:my-12">
            <ReactMarkdown
              components={{
                blockquote: ({ children }) => {
                  // Attempt to extract text content safely
                  const findText = (node) => {
                    if (typeof node === 'string') return node
                    if (Array.isArray(node)) return node.map(findText).join('')
                    if (node.props?.children) return findText(node.props.children)
                    return ''
                  }
                  
                  const textContent = findText(children)
                  
                  if (textContent.includes('Scout Tip:')) {
                    return (
                      <div className="bg-amber-50 border-l-8 border-amber-400 p-8 my-12 rounded-r-3xl shadow-sm flex gap-6 items-start">
                        <div className="bg-amber-400 rounded-2xl p-2.5 text-white shadow-md shrink-0 mt-1">
                          <Info size={24} />
                        </div>
                        <div>
                          <strong className="text-amber-900 text-xl block mb-2 tracking-tight">Scout Tip</strong>
                          <div className="text-amber-800 text-lg leading-relaxed italic font-medium">
                            {textContent.replace('Scout Tip:', '').trim()}
                          </div>
                        </div>
                      </div>
                    )
                  }
                  return <blockquote className="border-l-4 border-stone-200 pl-8 italic my-10 text-stone-500">{children}</blockquote>
                },
                a: ({ href, children }) => {
                  const label = String(children)
                  const isAffiliate = label.includes('via') || label.includes('Book') || label.includes('Check Availability')
                  
                  if (isAffiliate) {
                    return (
                      <div className="my-10 flex justify-center">
                        <a 
                          href={href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-indigo-600 text-white font-black text-lg py-5 px-10 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 group"
                        >
                          {children}
                          <ExternalLink size={22} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )
                  }
                  return <a href={href} className="font-bold border-b-2 border-indigo-100 hover:border-indigo-600 transition-colors">{children}</a>
                }
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Destination
