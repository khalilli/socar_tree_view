const ErrorFallback = () => {
    return (
        <div>
            <h2>Ooops, something went wrong :(</h2>
            <button onClick={() => window.location.reload()}>
                Refresh
            </button>
        </div>
    )
}

export default ErrorFallback;