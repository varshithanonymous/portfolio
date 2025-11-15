import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">My Portfolio</Link>
          <div className="space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-800">Projects</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}