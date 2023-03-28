<template>
  <main id="about-page">
    <div class="cluster_view">
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/C0.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 0</div>
              <div class="card-text">
               Member : 6 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/Cluster 1.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 1</div>
              <div class="card-text">
               Member : 6 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="img_cluster">
              <img class="logo_cluster" src="../assets/img/c2.jpg" alt="..." />
              <img class="logo_cluster" src="../assets/img/c9.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 2 & 9</div>
              <div class="card-text">
               Member : 8 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/c3.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 3</div>
              <div class="card-text">
               Member : 8 people
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="img_cluster">
              <img class="logo_cluster" src="../assets/img/c4.jpg" alt="..." />
              <img class="logo_cluster" src="../assets/img/c5.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 4 & 5</div>
           <div class="card-text">
               Member : 9 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/c6.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 6</div>
              <div class="card-text">
               Member : 8 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/c7.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 7</div>
              <div class="card-text">
               Member : 7 people
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-img-top">
              <img class="logo_cluster" src="../assets/img/c8.jpg" alt="..." />
            </div>
            <div class="card-body">
              <div class="card-title">Cluster 9</div>
           <div class="card-text">
               Member : 6 people
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script></script>
<style>
.row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-img-top {
  width: 150px;
  height: 120px;
  background-color: #d0d0d0;
  text-align: center;
}
.logo_cluster{
  mix-blend-mode: multiply;
}
img {
  max-width: 100%;
  max-height: 100%;
  background-image: none;
  
}
.img_cluster {
  background-color: #d0d0d0;
}
.img_cluster img {
  width: 150px;
  height: 120px;
  background-color: #d0d0d0;
  display: inline-block;
}
.card-title {
  text-align: center;
  font-size: 28px;
  -webkit-text-stroke: 2px black;
  -webkit-text-fill-color: black;
  color: white;
}
</style>
