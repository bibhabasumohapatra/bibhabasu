import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-8 mb-8">
        <div className="relative w-full aspect-[3/4] md:w-[240px] md:h-[320px] flex-shrink-0">
          <Image
            src="/bibhabasu_1.jpg"
            alt="Bibhabasu Mohapatra"
            fill
            priority
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Bibhabasu Mohapatra
          </h1>
          <div className="space-y-4 prose prose-neutral dark:prose-invert">
            <p>
              Hello and welcome! My name is Bibhabasu Mohapatra, and I am a passionate Deep Learning enthusiast dedicated to advancing the field of artificial intelligence.
              Currently working as a Data Scientist at Microsoft, previously working as an Engineer(Computer Vision) at Aira Matrix. I'm deeply committed to pushing the boundaries of AI research.
            </p>
            <p>
              I'm particularly interested in topics related to self-supervised learning, multi-modal learning, and Representations. These areas fascinate me because of their potential to revolutionize AI and address complex challenges in various domains.
              Open for Research Opportunities in Academia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
