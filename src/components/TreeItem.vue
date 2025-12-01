<!-- TreeItem.vue -->
<template>
    <div>
      <div class="tree-node">
        <span @click="toggleCollapse" class="node-label">{{ node.content }}</span>
        <div v-if="!collapsed && node.children && node.children.length > 0">
          <tree-item v-for="child in node.children" :key="child.id" :node="child"></tree-item>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      node: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        collapsed: true,
      };
    },
    methods: {
      toggleCollapse() {
        this.collapsed = !this.collapsed;
      },
    },
  };
  </script>
  
  <style scoped>
  .tree-node {
    margin-left: 20px; /* Adjust spacing between levels */
  }
  
  .node-label {
    cursor: pointer;
    font-weight: bold;
  }
  </style>
  