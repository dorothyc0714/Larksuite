export function Navbar() {
    return (
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-neutral-900" />
              <span className="text-sm font-semibold">Lark</span>
            </div>
  
            <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
              <a className="hover:text-neutral-900" href="#product">
                Product
              </a>
              <a className="hover:text-neutral-900" href="#solutions">
                Solutions
              </a>
              <a className="hover:text-neutral-900" href="#resources">
                Resources
              </a>
              <a className="hover:text-neutral-900" href="#pricing">
                Pricing
              </a>
            </nav>
          </div>
  
          {/* Right */}
          <div className="hidden items-center gap-5 text-sm md:flex">
            <a className="text-neutral-600 hover:text-neutral-900" href="#login">
              Log in
            </a>
            <a className="text-neutral-600 hover:text-neutral-900" href="#download">
              Download
            </a>
            <a
              className="rounded-full border border-blue-500 px-4 py-2 font-semibold text-blue-600 hover:bg-blue-50"
              href="#contact"
            >
              Contact sales
            </a>
            <a
              className="rounded-full bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              href="#try"
            >
              Try for free
            </a>
          </div>
  
          {/* Mobile */}
          <button className="md:hidden rounded-md border border-neutral-300 px-3 py-2 text-sm">
            Menu
          </button>
        </div>
      </header>
    );
  }