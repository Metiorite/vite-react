const BlogPreview = () => {
  const posts = [
    {
      title: "Building Scalable Microservices with NATS JetStream",
      excerpt: "Learn how to build resilient microservices architectures using NATS JetStream for persistent messaging and stream processing.",
      author: "Alex Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Architecture",
      image: "📚"
    },
    {
      title: "IoT at Scale: Processing Millions of Messages per Second",
      excerpt: "Discover how enterprises use NATS to handle massive IoT workloads with ultra-low latency and high reliability.",
      author: "Sarah Chen",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "IoT",
      image: "🌐"
    },
    {
      title: "NATS Security Best Practices for Production",
      excerpt: "Essential security patterns and configurations for deploying NATS in production environments.",
      author: "Mike Rodriguez",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Security",
      image: "🔒"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div className="space-y-4 mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest from our blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay up to date with the latest NATS features, best practices, 
              and success stories from the community.
            </p>
          </div>
          <a
            href="#blog"
            className="btn-secondary self-start lg:self-auto"
          >
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="text-3xl">{post.image}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="space-y-1">
                    <div className="font-medium text-gray-700">{post.author}</div>
                    <div>{post.date}</div>
                  </div>
                  <div className="text-right">
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <a
                  href="#read-more"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Read more
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay in the loop
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest updates, tutorials, and insights 
            from the NATS community.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;