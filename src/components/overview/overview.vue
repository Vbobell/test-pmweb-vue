<template>
  <section class="container-section container-overview">
        <OverviewItem 
            :parentData = "{ icon: 'icon-music',
                        contentInfo: 'content-success',
                        title: 'Horas de música tocadas', 
                        info: cards.hours_music.hours + 'h',
                        infoPerc: cards.hours_music.percent_diference}">
        </OverviewItem>
        <OverviewItem 
            :parentData = "{ icon: 'icon-music',
                        contentInfo: 'content-success',
                        title: 'Quantidade de bandas de rock', 
                        info: cards.quantity_bands.bands,
                        infoPerc: cards.quantity_bands.percent_diference}">
        </OverviewItem>
        <OverviewItem 
            :parentData = "{ icon: 'icon-tomb',
                        contentInfo: 'content-danger',
                        title: 'Perdas precoces de artistas incríveis', 
                        info: cards.lost_artists.losts,
                        infoPerc: cards.lost_artists.percent_diference}">
        </OverviewItem>
  </section>
</template>

<script src="./overview.js"></script>
<style lang="scss" src="./overview.scss"></style>