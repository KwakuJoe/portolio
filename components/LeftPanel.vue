<template>
      <div class="flex flex-col div lg:h-screen lg:w-1/2 lg:py-16 py-10 px-2  lg:sticky lg:top-0">
        <div>
            <!-- name -->
            <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a class="title" href="/">Joseph .K. Ampah</a>
            </h1>

            <!-- role -->
            <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Aspiring Web Developer & UI Designer 🌐 | IT Support Enthusiast 💻</h2>
            <!-- bio -->
            <p class="mt-4 max-w-xs leading-normal text-slate-400">
            I build accessible, inclusive products and digital experiences for the
            web.
        </p>
        </div>

        <!-- Nav -->
        <nav class="nav hidden lg:block grow" aria-label="In-page jump links">
            <slot></slot>
        </nav>

        <!-- social media -->
        <div class="flex gap-x-4 mt-8">
            <nuxt-link to="https://github.com/KwakuJoe">
              <Icon class="text-xl text-slate-400 hover:text-white" name="bi:github"  />
            </nuxt-link>
            <nuxt-link to="https://www.linkedin.com/in/josephampah/">
              <Icon class="text-xl text-slate-400 hover:text-white" name="bi:linkedin"  />
            </nuxt-link>
            <nuxt-link to="https://twitter.com/kwakujoe">
              <Icon class="text-xl text-slate-400 hover:text-white" name="tabler:brand-twitter-filled"  />
            </nuxt-link>
        </div>

        <!-- Inspired by -->
        <div class="flex gap-x-3">
            <p class="text-xs mt-4 text-gray-400 font-normal">
                Developed by 
                <span class="text-xs mt-4 text-white font-medium">Kwaku Ampah</span>
            </p>
            <p class="text-xs mt-4 text-gray-400 font-normal">
                Inspired by 
                <span class="text-xs mt-4 text-white font-medium">
                <nuxt-link to="https://brittanychiang.com/">
                    Brittany Chiang
                </nuxt-link>
                </span>
            </p>
        </div>
      </div>
</template>
<script setup>



</script>
<style>
    
</style>