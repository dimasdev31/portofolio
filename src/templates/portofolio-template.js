import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/SEO"
import "../scss/main.scss"
import Iframe from "react-iframe"

import styles from "../scss/portofolio.module.scss"

export default class Portofolio extends React.Component {
  render() {    

    return (
      <Layout>
        <Seo
          title="Portofolio"
          description="This my portofolio"
        />
        <div className="portofolio">
          <h1>Portofolio</h1>
          <p>Daftar project yang pernah dikerjakan disini adalah project berjalan yang digunakan oleh beberapa instansi.</p>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Portofolio</th>
              </tr>  
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Sistem Antrian Puskesmas Kandangan (Puskanda)</td>
              <td><a href="https://www.puskesmaskandangan.com/">https://www.puskesmaskandangan.com/</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sistem Laporan Catatan Harian Siswa (Combook)</td>
              <td> <a href="https://combook.iispsmkediri.sch.id/">https://combook.iispsmkediri.sch.id/</a></td>
            </tr>   
            </tbody>         
          </table>
          
        </div>
      </Layout>
    )
  }
}
