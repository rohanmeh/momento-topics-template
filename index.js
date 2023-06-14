import { getTopicClient } from './momento.js';
import express from 'express';

const app = express();

app.use(express.json());

app.listen(8000, () => { console.log('listening on port 8000') });

/**
 * Sets up Topic subscription client and Topic listeners
 */
const configure = async () => {
    const topicClient = await getTopicClient();
    await topicClient.subscribe('test-cache', 'test', {
      onItem: newMessage,
      onError: logSubscriptionError
    });
}
/**
 * Default message processor
*/
const newMessage = async (data) => {
    const details = JSON.parse(data.value());
    console.log(details)
};
/**
 * Error Handling for Topic Subscription errors
 */
const logSubscriptionError = (data, subscription) => {
    console.error(`An error occurred with the a subscription: ${data.toString()}`);
};

await configure()