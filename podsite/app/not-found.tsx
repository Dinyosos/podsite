export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <a href="/podsite/" className="mt-6 inline-block text-blue-600 underline">
          Go back home
        </a>
      </div>
    </main>
  )
}

