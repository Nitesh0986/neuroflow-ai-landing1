function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#172B36] text-white pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-[#FFC801]">
              NeuroFlow AI
            </h2>

            <p className="mt-5 text-gray-300 leading-7">
              Empowering businesses with next-generation AI automation,
              intelligent workflows, and data-driven insights.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Product
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#features" className="hover:text-[#FFC801] transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-[#FFC801] transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-[#FFC801] transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-[#FFC801] transition">About</a></li>
              <li><a href="#" className="hover:text-[#FFC801] transition">Blog</a></li>
              <li><a href="#" className="hover:text-[#FFC801] transition">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-300">
              hello@neuroflow.ai
            </p>

            <p className="text-gray-300 mt-3">
              +91 98765 43210
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#114C5A] hover:bg-[#FFC801] hover:text-black transition flex items-center justify-center"
              >
                G
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#114C5A] hover:bg-[#FFC801] hover:text-black transition flex items-center justify-center"
              >
                L
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#114C5A] hover:bg-[#FFC801] hover:text-black transition flex items-center justify-center"
              >
                X
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-14 pt-8 text-center text-gray-400">
          © 2026 NeuroFlow AI. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;