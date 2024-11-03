export default function YouTubePage() {
  const videos = [
    {
      id: '7q3NGMkEtjI',
      title: 'Visualizing Attentions in Vision Transformer (PyTorch Image Models-timm using PyTorch forward hook)',
    },
    {
      id: 'g-470mvLSqI',
      title: 'Coding Vision Transformer from scratch in PyTorch',
    },
  ]

  return (
    <section>
      <h1 className="font-bold text-4xl md:text-5xl mb-12 tracking-tighter">
        YouTube Videos
      </h1>
      <div className="grid gap-12">
        {videos.map((video) => (
          <div key={video.id} className="space-y-4">
            <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-medium tracking-tight">{video.title}</h2>
          </div>
        ))}
      </div>
    </section>
  )
} 