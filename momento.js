import { TopicClient, EnvMomentoTokenProvider, Configurations } from '@gomomento/sdk';
import getSecret from './secrets.js';

let topicClient;

/**
 * Gets an initialized Momento Topic Client
 * 
 * @returns @type TopicClient
 */
export async function getTopicClient() {
    if(topicClient)
      return topicClient;
  
    const authToken = await getSecret('MomentoCacheSecret');
    process.env.AUTH_TOKEN = authToken;
    const credentials = new EnvMomentoTokenProvider({ environmentVariableName: 'AUTH_TOKEN' });
    topicClient = new TopicClient({
      configuration: Configurations.Laptop.v1(),
      credentialProvider: credentials
    });
    return topicClient;  
}