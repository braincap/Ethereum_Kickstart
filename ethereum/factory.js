import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x948413f1Ee929634c8Aa2e24D3a70982CAF0781A'
);

export default instance;
