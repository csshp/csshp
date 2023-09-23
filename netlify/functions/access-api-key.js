exports.handler = async function (event, context) {
    try {
        // Netlify UIで設定した環境変数からAPIキーを取得
        const apiKey = process.env.REACT_APP_NETLIFY_TEST;

        // ここでAPIキーを使用して何かを行うことができます
        // この例ではAPIキーをそのままレスポンスとして返します
        return {
            statusCode: 200,
            body: JSON.stringify({ apiKey }),
        };
    } catch (error) {
        // エラーが発生した場合はエラーレスポンスを返します
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
