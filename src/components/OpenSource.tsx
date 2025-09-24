const OpenSource = () => {
  const stats = [
    { label: "GitHub Stars", value: "15k+" },
    { label: "Contributors", value: "200+" },
    { label: "Programming Languages", value: "40+" },
    { label: "Downloads/Month", value: "2M+" }
  ];

  const projects = [
    {
      name: "NATS Server",
      description: "High-performance messaging system core server",
      language: "Go",
      stars: "15.2k"
    },
    {
      name: "NATS.js",
      description: "JavaScript/TypeScript client for NATS",
      language: "TypeScript",
      stars: "1.8k"
    },
    {
      name: "NATS.py",
      description: "Python asyncio client for NATS",
      language: "Python",
      stars: "900"
    }
  ];

  return (
    <section id="developers" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built by developers, for developers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            NATS is completely open source. Join thousands of developers building 
            the future of connected systems.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-12">
          <h3 className="text-2xl font-bold text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white">
                    {project.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {project.language}
                  </span>
                  <a
                    href="#github"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4">Join the community</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contribute to NATS, get help from the community, and shape the future of messaging.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#github"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              Star on GitHub
            </a>
            <a href="#community" className="btn-secondary bg-transparent border-gray-600 text-white hover:bg-gray-700">
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;