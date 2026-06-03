<script setup lang="ts">
defineProps<{ dark: boolean }>()
const emit = defineEmits<{ toggleTheme: []; nav: [id: string] }>()

const links: Array<[string, string]> = [
  ['work', 'Work'],
  ['services', 'What I do'],
  ['ways', 'Pricing'],
  ['about', 'About'],
  ['contact', 'Contact'],
]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-row">
        <a class="wm" @click="emit('nav', 'top')"><Wordmark :size="16" /></a>
        <nav class="footer-nav">
          <a
            v-for="[id, l] in links" :key="id"
            @click="emit('nav', id)"
          >{{ l }}</a>
        </nav>
        <button
          class="nav-toggle"
          aria-label="Toggle theme"
          title="Toggle theme"
          @click="emit('toggleTheme')"
        >
          <AppIcon :name="dark ? 'sun' : 'moon'" :size="16" />
        </button>
      </div>
      <p class="footer-line">
        Gökhan Arlı · Independent engineer &amp; architect · Sylow since 2003
        <span style="margin: 0 8px; color: var(--border-strong);">·</span>
        © {{ year }}
      </p>
    </div>
  </footer>
</template>
