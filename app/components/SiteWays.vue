<script setup lang="ts">
const wholePoints = [
  'Scope and price agreed up front',
  'Built, hosted and delivered as one package',
  'No hourly meter, no surprises',
]
const sprintPoints = [
  'Time-boxed, a week or two at a time',
  'Rescues, migrations, features, second opinions',
  'Pause or extend whenever you need',
]
</script>

<template>
  <div class="wrap">
    <SectionHead
      num="04"
      eyebrow="Ways to work"
      lead="Two ways to engage, depending on where your project is. Both end with something real shipped — and we agree the terms before I start."
    >
      How we <em>work together.</em>
    </SectionHead>
    <div class="ways-grid">
      <article class="way way--primary">
        <div class="way-glow" />
        <div class="way-tag">
          <span class="way-tag-icon"><AppIcon name="package" :size="16" /></span>
          <span class="way-tag-num">01</span>
          <span>Whole project</span>
        </div>
        <h3 class="way-title">One price, <em>zero to one hundred.</em></h3>
        <p class="way-body">
          We agree the scope and a single price for the whole thing — designed, built,
          hosted and handed over as one working package. You know what you're getting,
          and what it costs, before a line of code.
        </p>
        <ul class="way-points">
          <li v-for="pt in wholePoints" :key="pt" class="way-point">
            <span class="way-point-icon"><AppIcon name="check" :size="15" :sw="2" /></span>{{ pt }}
          </li>
        </ul>
        <div class="way-foot">Fixed scope · one price · 0 → 100</div>
      </article>

      <article class="way">
        <div class="way-glow" />
        <div class="way-tag">
          <span class="way-tag-icon"><AppIcon name="bolt" :size="16" /></span>
          <span class="way-tag-num">02</span>
          <span>Short sprints</span>
        </div>
        <h3 class="way-title">Or short, focused <em>sprints.</em></h3>
        <p class="way-body">
          Need a focused burst rather than the whole build? We work in short, time-boxed
          sprints — easy to start, easy to stop, with something shipped at the end of
          each one.
        </p>
        <ul class="way-points">
          <li v-for="pt in sprintPoints" :key="pt" class="way-point">
            <span class="way-point-icon"><AppIcon name="check" :size="15" :sw="2" /></span>{{ pt }}
          </li>
        </ul>
        <div class="way-foot">Rolling · easy to start, easy to stop</div>
      </article>
    </div>
    <p class="ways-note">
      Not sure which fits? <em>Tell me about the project</em> and I'll suggest the honest option — even if it's the smaller one.
    </p>
  </div>
</template>
