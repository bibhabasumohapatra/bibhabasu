import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="w-full">
      <Image
        src="/bibhabasu_1.jpg"
        alt="Bibhabasu Mohapatra"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-8 sm:mb-5 hover:grayscale transition-all duration-300"
        width={320}
        height={320}
        priority
      />

      <h1 className="mb-8 text-3xl font-medium tracking-tight">
        Bibhabasu Mohapatra
      </h1>

      <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
        <p className="text-xl">
          Hello and welcome! My name is Bibhabasu Mohapatra, and I am a passionate Deep Learning enthusiast dedicated to advancing the field of artificial intelligence.
          Currently working as a Data Scientist at Microsoft, previously working as an Engineer(Computer Vision) at Aira Matrix. I'm deeply committed to pushing the boundaries of AI research.
        </p>

        <p className="text-xl">
          I'm particularly interested in topics related to self-supervised learning, multi-modal learning, and Representations. These areas fascinate me because of their potential to revolutionize AI and address complex challenges in various domains.
          Open for Research Opportunities in Academia.
        </p>
      </div>
    </section>
  )
}
