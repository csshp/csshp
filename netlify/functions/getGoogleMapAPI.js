exports.handler = async function (event, context) {
    try {
        const googleMapAPIKey = process.env.REACT_APP_EMAILJS_PUBLIC_ID;
        return {
            statusCode: 200,
            body: JSON.stringify({ googleMapAPIKey }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};