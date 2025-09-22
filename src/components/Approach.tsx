const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="flex flex-col gap-8 mt-12">
        <div className="p-8 bg-black-100 rounded-3xl border border-white/[0.1]">
          <h3 className="text-2xl font-bold mb-4">Planning & Strategy</h3>
          <p className="text-white-200">
            We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements.
          </p>
        </div>
        <div className="p-8 bg-black-100 rounded-3xl border border-white/[0.1]">
          <h3 className="text-2xl font-bold mb-4">Development & Progress Update</h3>
          <p className="text-white-200">
            Once we agree on the plan, I cue my lofi playlist and dive into 
            coding. From initial sketches to polished code, I keep you updated 
            every step of the way.
          </p>
        </div>
        <div className="p-8 bg-black-100 rounded-3xl border border-white/[0.1]">
          <h3 className="text-2xl font-bold mb-4">Development & Launch</h3>
          <p className="text-white-200">
            This is where the magic happens! Based on the approved design, 
            I'll translate everything into functional code, building your website 
            from the ground up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Approach;