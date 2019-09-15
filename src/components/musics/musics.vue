<template>
    <section class="container-section container-musics">
        <div class="content-item content-title">
            <h2>Músicas</h2>
        </div>
        <div class="content-musics">
            <div class="content-item content-item-table">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Avaliação</th>
                            <th>Data de gravação</th>
                            <th>Artista</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in pageOfItems" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.title}}</td>
                            <td>{{item.rate}}</td>
                            <td>{{item.date_record}}</td>
                            <td>{{item.artist}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="content-item content-item-pagination">
                <jw-pagination :items="musics" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
            </div>
        </div>
    </section>
</template>

<script src="./musics.js"></script>
<style lang="scss" src="./musics.scss"></style>