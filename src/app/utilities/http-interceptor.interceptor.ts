import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req =this.addAuthHeader(req);
    return next.handle(req);
    
}

private addAuthHeader(request:any){
  return request.clone({
    header:request.header
    .set('Content-Type', 'application/json')
    .set('Accept','application/json')
  });
}
}
