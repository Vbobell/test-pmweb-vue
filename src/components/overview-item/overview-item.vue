<template>
  <div class="content-item content-item-overview" v-bind:class="parentData.contentInfo">
        <div class="item item-title">
            <i class="icon-default" v-bind:class="parentData.icon"></i>
            <h2>
                {{ parentData.title }}
            </h2>
        </div>
        <div class="item item-info">
            <strong>
                {{ parentData.info }}
            </strong>
        </div>
        <div class="item item-info-perc">
            <strong>
                {{ parentData.infoPerc }}
            </strong>
        </div>
  </div>
</template>

<script src="./overview-item.js"></script>