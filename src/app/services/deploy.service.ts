import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deploy } from './../models/deploy';

@Injectable({
  providedIn: 'root'
})
export class DeployService {
  selectDeploy: Deploy;
  deploy: Deploy[];

  readonly URL_API = 'http://localhost:4000/api/listDeploys';

  constructor(private http: HttpClient) {
    this.selectDeploy = new Deploy();
  }

  getDeploys() {
    return this.http.get(this.URL_API);
  }

  postDeploy(deploy: Deploy) {
    return this.http.post(this.URL_API, deploy);
  }

  putDeploy(deploy: Deploy) {
    return this.http.put(this.URL_API + `/${deploy._id}`, deploy);
  }

  deleteDeploy(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
