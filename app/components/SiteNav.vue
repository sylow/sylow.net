<script setup lang="ts">
defineProps<{ dark: boolean }>()
const emit = defineEmits<{ toggleTheme: []; nav: [id: string] }>()

const sections = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'What I do' },
  { id: 'about', label: 'About' },
]
</script>

<template>
  <header class="nav">
    <div class="nav-inner">
      <a class="wm" @click="emit('nav', 'top')"><Wordmark :size="18" /></a>
      <nav class="nav-right">
        <a
          v-for="s in sections" :key="s.id"
          class="nav-link"
          @click="emit('nav', s.id)"
        >{{ s.label }}</a>
        <span class="nav-divider" />
        <a class="nav-link nav-link--cta" @click="emit('nav', 'contact')">Contact</a>
        <button
          class="nav-toggle"
          aria-label="Toggle theme"
          title="Toggle theme"
          @click="emit('toggleTheme')"
        >
          <AppIcon :name="dark ? 'sun' : 'moon'" :size="16" />
        </button>
      </nav>
    </div>
  </header>
</template>
