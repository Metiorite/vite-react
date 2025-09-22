import { companies, testimonials } from "../data";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="max-w-2xl mx-auto p-6 bg-black-100 rounded-lg border border-white/[0.1]"
              >
                <blockquote className="text-lg italic text-white-200">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white-100">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={company.img}
                alt={company.name}
                className="md:w-10 w-5"
              />
              <img
                src={company.nameImg}
                alt={company.name}
                width={company.id === 4 || company.id === 5 ? 100 : 150}
                className="md:w-24 w-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;