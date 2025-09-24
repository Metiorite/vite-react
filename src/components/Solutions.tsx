const Solutions = () => {
  const solutions = [
    {
      title: "Microservices",
      description: "Build resilient microservices architectures with service discovery, load balancing, and circuit breakers built-in.",
      image: "🏗️",
      features: ["Service mesh", "Load balancing", "Health checks", "Circuit breakers"]
    },
    {
      title: "IoT & Edge",
      description: "Connect millions of devices with lightweight, efficient messaging that works from edge to cloud.",
      image: "🌐",
      features: ["Lightweight protocol", "Offline support", "Edge computing", "Device management"]
    },
    {
      title: "Real-time Data",
      description: "Stream and process data in real-time with persistent streams and exactly-once delivery guarantees.",
      image: "⚡",
      features: ["Stream processing", "Persistent storage", "Replay capability", "At-least-once delivery"]
    },
    {
      title: "AI/ML Pipelines",
      description: "Build robust ML pipelines with reliable data ingestion, model serving, and result distribution.",
      image: "🤖",
      features: ["Data ingestion", "Model serving", "Batch processing", "Result streaming"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Solutions for every use case
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From startups to Fortune 500 companies, NATS powers critical infrastructure 
            across industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{solution.image}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2 text-sm text-gray-700"
                      >
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to see NATS in action for your use case?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Talk to Sales
            </a>
            <a href="#demo" className="btn-secondary">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;