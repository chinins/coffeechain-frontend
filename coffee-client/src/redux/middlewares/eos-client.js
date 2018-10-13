import eosjs from 'eosjs';

export default class EOSIOClient {
  constructor (eosioEndpoint, contractAccount, privateKey) {
    const rpc = new eosjs.Rpc.JsonRpc(eosioEndpoint);
    const signatureProvider =
      new eosjs.SignatureProvider([privateKey]);
    this.contractAccount = contractAccount;
    this.eos = new eosjs.Api({ rpc, signatureProvider });
  }

  transaction = (actor, action, data) => {
    return this.eos.transact({
      actions: [
        {
          account: this.contractAccount,
          name: action,
          authorization: [
            {
              actor,
              permission: 'active'
            }
          ],
          data: {
            ...data
          }
        }
      ]
    }, {
      blocksBehind: 3,
      expireSeconds: 30
    });
  }
}
