import { DeployService } from './../../services/deploy.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Deploy } from 'src/app/models/deploy';

declare var M: any;

@Component({
  selector: 'app-deploys',
  templateUrl: './deploys.component.html',
  styleUrls: ['./deploys.component.css'],
  providers: [ DeployService ]
})
export class DeploysComponent implements OnInit {

  constructor(private deployService: DeployService) { }

  ngOnInit() {
    this.getDeploys();
  }

  getDeploys() {
    this.deployService.getDeploys().subscribe(res => {
      this.deployService.deploy = res as Deploy[];
      console.log(res);
    });
  }

  addDeploy(form: NgForm) {
    if ( form.value._id ) {
      this.deployService.putDeploy(form.value).subscribe( res => {
        console.log(res);
        M.toast({html: 'Registro de Deploy atualizado'});
        form.resetForm(form);
        this.getDeploys();
      });
    } else {
      this.deployService.postDeploy(form.value).subscribe(res => {
        console.log(res);
        form.resetForm(form);
        M.toast({html: 'Registro de Deploy salvo'});
        this.getDeploys();
      });
    }
  }

  deleteDeploy(_id: string) {
    if (confirm('Tem certeza de que quer elimina o registro?')) {
      this.deployService.deleteDeploy(_id).subscribe(res => {
        console.log(res);
        M.toast({html: 'Registro de Deploy deletado'});
        this.getDeploys();
      });
    }
  }

  editDeploy(deploy: Deploy) {
    this.deployService.selectDeploy = deploy;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.deployService.selectDeploy = new Deploy();
    }

  }
}
