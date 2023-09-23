exports.handler = async function (event, context) {
    try {
        // Netlify UIで設定した環境変数からAPIキーを取得
        const emailJsIds = {
            publicID: process.env.REACT_APP_EMAILJS_PUBLIC_ID,
            serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
            templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        };
        return {
            statusCode: 200,
            body: JSON.stringify({ emailJsIds }),
        };
    } catch (error) {
        // エラーが発生した場合はエラーレスポンスを返します
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
