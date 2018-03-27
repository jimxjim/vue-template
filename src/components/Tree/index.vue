<template>
  <div class="tree-view">
    <div class="label-wrapper" :class="wrapperClasses">
      <div class="label"  @click="toggleChildren" :style="indent" :class="labelClasses">
        <img :src="iconSrc" />
        <span v-if="!isArray">{{ tree.labels }}</span>
        <span v-if="isArray" v-for="label in tree.labels" :key="label">{{ label }}</span>
        <!-- <span>{{ rank }}</span> -->
      </div>
      <tree-view 
        v-if="showChildren"
        v-for="node in tree.nodes" 
        :tree="node" 
        :depth="depth + 1"
        :key="node.label"
      >
      </tree-view>
    </div>
  </div>
</template>

<script>
import TriangleRight from './image/triangle-right.svg';
import TriangleRightEmpty from './image/triangle-right-empty.svg';
import TriangleDown from './image/triangle-down.svg';

export default {
  name: 'tree-view',
  props: [ 'tree', 'depth' ],
  data() {
    return {
      rightImg: TriangleRight,
      rightEmptyImg: TriangleRightEmpty,
      downImg: TriangleDown,
      showChildren: false,
      /* 传入的tree范例 */
      // tree: {
      //   labels: ['Thomas','Diamond'],
      //   nodes: [
      //     {
      //       labels: ['John', 'Platinum'],
      //       nodes: [
      //         {
      //           labels: 'item1.1',
      //         },
      //         {
      //           labels: 'item1.2',
      //           nodes: [
      //             {
      //               labels: 'item1.2.1'
      //             }
      //           ]
      //         }
      //       ]
      //     }, 
      //     {
      //       labels: ['Jack', 'Gold'],
      //     }
      //   ]
      // }
     }
  },
  computed: {
    iconSrc() {
      if (this.tree.nodes) {
        return this.showChildren ? this.downImg : this.rightImg;
      }
      return this.rightEmptyImg;
    },
    labelClasses() {
      return { 'has-children': this.tree.nodes }
    },
    wrapperClasses() {
      return { 'is-zero': this.depth === 0 }
    },
    indent() {
      return { transform: `translate(${this.depth * 20}px)` }
    },
    isArray() {
      return Array.isArray(this.tree.labels);
    }
  },
  methods: {
    toggleChildren() {
       this.showChildren = !this.showChildren;
    }
  }
}
</script>

<style lang="scss" scoped>
.tree-view {
  user-select: none;
  .label-wrapper {
    padding: 10px 0px 0px 5px;
    .label {
      text-align: left;
      display: flex;
      align-items: center;
      span:nth-child(n+1) {
        margin-left: 10px;
      }
    }
    &.is-zero {
      border-bottom: 1px dashed #ccc;
      padding: 20px 5px;
    }
    .has-children {
      cursor: pointer;
    }
  }
}
</style>
