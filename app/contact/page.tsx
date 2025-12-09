import React from "react";

function Contact() {
  return (
    <section className="flex items-center justify-center my-30 px-6 md:px-12">
      <div className="max-w-5xl grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Left - Info */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20 w-fit mx-auto md:mx-0">
            Contact
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">
            Let&apos;s <span className="text-amber-400">Connect</span>
          </h1>

          <p className="text-lg text-amber-50/70 mb-6">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>

          <p className="text-base text-amber-50/50">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Right - Form */}
        <div>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-amber-50 placeholder:text-amber-50/40 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-amber-50 placeholder:text-amber-50/40 focus:outline-none focus:border-amber-400/50 transition-colors"
              />
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-amber-50 placeholder:text-amber-50/40 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
