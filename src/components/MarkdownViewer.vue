<!-- MarkdownViewer.vue -->
<template>
    <div>
      <div v-if="state.loading">Loading...</div>
      <div v-else>
        <Markdown :source="state.markdownContent" />
      </div>
    </div>
  </template>
  
<script lang="ts" setup>
import { reactive } from 'vue'
import Markdown from 'vue3-markdown-it';

const state = reactive({
  markdownContent: '',
  loading: true,
})

const loadMarkdownFile = async () => {
  // Replace 'your-markdown-file.md' with the filename you want to load
  const fileName = 'help.md';

  try {
    // Use dynamic import to load the file content
    //const markdownContent  = `# *hello* #`;
    const response = await fetch('/help.md');
  
    if (response.ok) {
      state.markdownContent = await response.text();
    } else {
      console.error('Failed to load file:', response.status, response.statusText);
    }

    //this.markdownContent = markdownContent;
    state.loading = false;
  } catch (error) {
    console.error('Error loading Markdown file:', error);
    state.loading = false;
  }
}

loadMarkdownFile()

</script>
  