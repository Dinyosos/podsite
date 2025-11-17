import Link from 'next/link'

const navLinks = [
  { href: '/podsite/', label: 'Home' },
  { href: '/podsite/episodes/', label: 'Episodes' },
  { href: '/podsite/about/', label: 'About' },
  { href: '/podsite/faq/', label: 'FAQ' },
]

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/podsite/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
              Podsite
            </Link>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-4 flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Podsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

