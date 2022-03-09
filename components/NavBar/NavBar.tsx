import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-slate-600 sticky top-0">
      <div className="h-12 sm:max-w-xl md:max-w-3xl flex m-auto justify-between items-center p-4">
        <Link href="/">
          <a className="text-base text-gray-100 font-light">Home</a>
        </Link>
        <ul className="list-none">
          <Link href="/posts">
            <a className="text-base text-gray-100 font-light">Todos los post</a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
