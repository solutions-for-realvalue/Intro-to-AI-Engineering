// Import and configure dotenv
require('dotenv').config();

import OpenAI from 'openai'

// Access the API key from the environment variables
const apiKey = process.env.API_KEY;

const openai = new OpenAI({
    apiKey: apiKey,
})

console.log(openai.apiKey)

//Error: It looks like you're running in a browser-like environment. This is disabled by default, as it risks exposing your secret API credentials to attackers. If you understand the risks and have appropriate mitigations in place, you can set the `dangerouslyAllowBrowser` option to `true`, e.g., new OpenAI({ apiKey, dangerouslyAllowBrowser: true }); https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety

