# Manipulando Arquivos com Ionic5
_**Mostra como criar diretório, criar arquivo e inserir conteúdo dentro do arquivo.**_

**Passo 1: Instalar o plugin**
<br>ionic cordova plugin add cordova-plugin-file
<br>npm install @ionic-native/file

**Passo 2: Adicionar o import no app.Module.ts**
<br>import { File } from '@ionic-native/file/ngx';

**Passo 3: Adicionar no Providers**
<br>
@NgModule({
  <br>declarations: [AppComponent],
  <br>entryComponents: [],
  <br>imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  <br>providers: [
    <br>StatusBar,
    <br>SplashScreen,
    <br>File,
    <br>{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  <br>],
  <br>bootstrap: [AppComponent]
<br>})

**Passo 4: Adicionar o import no home.page.ts**
<br>import { File } from '@ionic-native/file/ngx';

**Passo 5: Adicionar no Constructor, dentro do arquivo home.page.ts**
<br>constructor(private file: File)

**Passo 6: Copiar as 3 funções**
<br>criarDiretorio() {
   <br>try{
    <br>this.file.createDir(this.path,this.diretorio,true);
    <br>//this.file.getDirectory(dir, 'myfile.txt',{create:true});
    <br>alert('Diretório criado!');
   <br>}
   <br>catch(error){
    <br>alert('erro');
   <br>}
  
 <br>}

 <br>criarArquivo(){
   <br>try{
    <br>this.file.createFile(this.path + this.diretorio,this.nomeArquivo,false);
    <br>alert('Arquivo criado!');
  <br> }catch(error){
     <br>alert('Erro ao criar arquivo');
   <br>}
    
<br> }

 <br>escreverArquivo(){
 <br> try{
   <br>this.texto  = "\n  Gravar conteúdo  ";
<br>this.blob = new Blob([this.texto],{type:'text/plain'});
   
   <br>this.file.writeFile(this.path + this.diretorio,this.nomeArquivo,this.blob,{replace:false,append:true});
   <br>alert('Texto gravado em arquivo');
  <br>}catch(error){
   <br> alert('Erro ao gravar no arquivo');
  <br>}
   
<br>}

**Passo 7: Colocar as chamadas no arquivo home.page.html**
<br><ion-button expand="full" color="primary" (click)="criarDiretorio()">Criar diretório</ion-button>
  <br>
  <ion-button expand="full" color="primary" (click)="criarArquivo()">Criar arquivo</ion-button>
  <br>
  <ion-button expand="full" color="primary" (click)="escreverArquivo()">Escrever no arquivo</ion-button>
