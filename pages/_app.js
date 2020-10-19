import '../styles/index.css'

function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="min-container container max-w-lg mx-auto bg-white rounded-md p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default App
