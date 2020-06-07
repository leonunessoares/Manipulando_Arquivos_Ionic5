import { Component } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  path:any = this.file.externalRootDirectory + '/Android/';
  diretorio:any='localizacao';
  nomeArquivo:any='minhalocalizacao.txt';
  texto:any = "";
  private blob: Blob;

  constructor(private file: File) {}


 criarDiretorio() {
   try{
    this.file.createDir(this.path,this.diretorio,true);
    //this.file.getDirectory(dir, 'myfile.txt',{create:true});
    alert('Diretório criado!');
   }
   catch(error){
     alert('erro');
   }
  
 }

 criarArquivo(){
   try{
    this.file.createFile(this.path + this.diretorio,this.nomeArquivo,false);
    alert('Arquivo criado!');
   }catch(error){
     alert('Erro ao criar arquivo');
   }
    
 }

 escreverArquivo(){
  try{
   this.texto  = "\n  Gravar conteúdo  ";
   this.blob = new Blob([this.texto],{type:'text/plain'});
   
   this.file.writeFile(this.path + this.diretorio,this.nomeArquivo,this.blob,{replace:false,append:true});
   alert('Texto gravado em arquivo');
  }catch(error){
    alert('Erro ao gravar no arquivo');
  }
   
}



 /*getPermission() {
  this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    .then(status => {
      if (status.hasPermission) {
        this.downloadFile();
      } 
      else {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
          .then(status => {
            if(status.hasPermission) {
              this.downloadFile();
            }
          });
      }
    });
}*/

}


