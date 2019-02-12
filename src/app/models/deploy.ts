export class Deploy {

  constructor( _id = '', emailPO = '', po = '', data = '', servico = '', status = false, versao = '', releaseTFS = 0, obs = '' ) {
    this._id = _id;
    this.emailPO = emailPO;
    this.po = po;
    this.data = data;
    this.servico = servico;
    this.status = status;
    this.releaseTFS = releaseTFS;
    this.obs = obs;
   }

  _id: string;
  emailPO: string;
  po: string;
  data: string;
  servico: string;
  status: boolean;
  versao: string;
  releaseTFS: number;
  obs: string;
}
