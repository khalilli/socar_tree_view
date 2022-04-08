import React from "react";
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter as Router} from "react-router-dom";
import ErrorFallback from "../components/Fallbacks/ErrorFallback";
import LoadFallback from "../components/Fallbacks/LoadFallback";

const AppProvider = (props) => {
    return (
        <React.Suspense fallback={LoadFallback}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <div>
                    <Router>
                       {props.children}
                    </Router>
                </div>
            </ErrorBoundary>
        </React.Suspense>
    )
}

export default AppProvider;