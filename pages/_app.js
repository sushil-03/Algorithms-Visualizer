import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
    return (
        // <div className=" md:ml-20 md:mr-20 ml-5 mr-5">
        <div>
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
