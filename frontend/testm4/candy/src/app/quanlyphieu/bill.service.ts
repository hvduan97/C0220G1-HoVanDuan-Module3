import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Phieu} from "./phieu";
import {DoiTac} from "./doi-tac";
import {NhanVien} from "./nhan-vien";
import {TenThanhToan} from "./ten-thanh-toan";
import {VanChuyen} from "./van-chuyen";
import {ViTriLuuTru} from "./vi-tri-luu-tru";
import {Quanlyphieu} from "./quanlyphieu";

@Injectable({
  providedIn: 'root'
})
export class BillService {

  API_URL_P = 'http://localhost:3000/phieu';
  API_URL_dt = 'http://localhost:3000/doi-tac';
  API_URL_nv = 'http://localhost:3000/nhan-vien';
  API_URL_tt = 'http://localhost:3000/ten-thanh-toan';
  API_URL_vc = 'http://localhost:3000/van-chuyen';
  API_URL_vt = 'http://localhost:3000/vi-tri-luu-tru';
  API_URL_qlp = 'http://localhost:3000/quanlyphieu';
  // URL2 = 'http://localhost:3000/typeCustomer';
  constructor(private httpClient: HttpClient) { }

  findAllPh(): Observable<Phieu[]> {
    return this.httpClient.get<Phieu[]>(this.API_URL_P);
  }

  findAllDt(): Observable<DoiTac[]> {
    return this.httpClient.get<DoiTac[]>(this.API_URL_dt);
  }

  findAllNv(): Observable<NhanVien[]> {
    return this.httpClient.get<NhanVien[]>(this.API_URL_nv);
  }

  findAllTt(): Observable<TenThanhToan[]> {
    return this.httpClient.get<TenThanhToan[]>(this.API_URL_tt);
  }

  findAllVc(): Observable<VanChuyen[]> {
    return this.httpClient.get<VanChuyen[]>(this.API_URL_vc);
  }

  findAllVt(): Observable<ViTriLuuTru[]> {
    return this.httpClient.get<ViTriLuuTru[]>(this.API_URL_vt);
  }

  findAllLp(): Observable<Quanlyphieu[]> {
    return this.httpClient.get<Quanlyphieu[]>(this.API_URL_qlp);
  }


  findByIdPh(id: number): Observable<Phieu> {
    return this.httpClient.get<Phieu>(this.API_URL_P + '/' + id);
  }

  findByIdDt(id: number): Observable<DoiTac> {
    return this.httpClient.get<DoiTac>(this.API_URL_dt + '/' + id);
  }

  findByIdNv(id: number): Observable<NhanVien> {
    return this.httpClient.get<NhanVien>(this.API_URL_nv + '/' + id);
  }

  findByIdTt(id: number): Observable<TenThanhToan> {
    return this.httpClient.get<TenThanhToan>(this.API_URL_tt + '/' + id);
  }

  findByIdVc(id: number): Observable<VanChuyen> {
    return this.httpClient.get<VanChuyen>(this.API_URL_vc + '/' + id);
  }

  findByIdVt(id: number): Observable<ViTriLuuTru> {
    return this.httpClient.get<ViTriLuuTru>(this.API_URL_vt + '/' + id);
  }

  findByIdLp(id: number): Observable<Quanlyphieu> {
    return this.httpClient.get<Quanlyphieu>(this.API_URL_qlp + '/' + id);
  }

  // create(customer: Partial<Customer>): Observable<Customer> {
  //   return this.httpClient.post<Customer>(this.API_URL, customer);
  // }
  // deleteById(id: number): Observable<void> {
  //   return this.httpClient.delete<void>(this.API_URL + '/' + id);
  // }
  // updateCus(post: Customer): Observable<Customer> {
  //   return this.httpClient.put<Customer>(`${this.API_URL}/${post.id}`, post);
  // }
}
