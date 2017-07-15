import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { AppConfig } from "app/app.config";
import { Observable } from "rxjs/Observable";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-upload-frame',
  templateUrl: './upload-frame.component.html',
  styleUrls: ['./upload-frame.component.css']
})
export class UploadFrameComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<UploadFrameComponent>, private http: Http, private appConfig: AppConfig ) { }

  ngOnInit() {
  }

  onSelectFile(event){
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);

        let name = file.name.split('.')[0];

        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.appConfig.config.host + 'gameframe/upload/' + name, formData, options)
            .catch(error => Observable.throw(error))
            .subscribe(
                data => {
                  console.log('success')
                  this.dialogRef.close();
            },
                error => console.log(error)
            )
    }
  }
}
