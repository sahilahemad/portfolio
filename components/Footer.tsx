export default function Footer() {
  return (
    <footer className="py-14 border-t border-white/10">
      <div className="container flex flex-col md:flex-row
                      items-center justify-between gap-6">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Sahil Ahmed. All rights reserved.
        </p>
 {/* Centre */}
        <p className="text-sm text-gray-400">
          Contact Me on the Gmail or LinkedIn for More.
        </p>
        {/* Right */}
        <div className="flex gap-6 text-sm">
          <a
            href="/Sahil_Resume.pdf"
            download
            className="hover:text-purple-400 transition"
          >
            Download Resume
          </a>

          {/* <a
            href="https://github.com/sahilahemad"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/sahil-ahemad-90s67"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </footer>
  );
}
